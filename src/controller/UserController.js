import { httpResponse } from "../utils/httpResponse";
import { HTTP_SUCCESS_RESPONSE } from "../constants/HTTP";
import { ERRORS } from "../Error/ERRORS";
import { Hasher } from "../utils/Hasher";
import { Jwt } from "../utils/Jwt";
import UserModel from "../model/UserModel";

export class UserController {
    /* 
        catch all errors and pass it to next();
        so that we can handle those in global error handler "src/Error/handler.js"
    */
    static create = async (req, res, next) => {
        try {
            const { user } = req.body;
            const newUser = new UserModel(user);
            await newUser.save();
            return httpResponse(HTTP_SUCCESS_RESPONSE.OK, newUser, res);
        } catch (error) {
            next(error);
        }
    };

    static signIn = async (req, res, next) => {
        try {
            const { user } = req.body;
            const newUser = await UserModel.findOne({
                email: user.email,
            }).select("+password");
            if (!newUser) throw ERRORS.AUTH.LOGIN;
            const valid = await Hasher.validatePassword(
                user.password,
                newUser.password
            );
            if (!valid) throw ERRORS.AUTH.LOGIN;
            const session = new Date().valueOf();
            const updatedUser = await UserModel.findByIdAndUpdate(
                newUser._id,
                {
                    session: session,
                },
                { new: true }
            ).select("+password");
            const token = await Jwt.getToken(updatedUser);
            return httpResponse(HTTP_SUCCESS_RESPONSE.OK, token, res);
        } catch (error) {
            next(error);
        }
    };

    static signout = async (req, res, next) => {
        try {
            const { user } = req;
            await UserModel.updateOne({ _id: user._id }, { session: "" });
            return httpResponse(HTTP_SUCCESS_RESPONSE.OK, "signed out", res);
        } catch (error) {
            next(error);
        }
    };
}
