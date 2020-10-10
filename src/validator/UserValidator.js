import * as yup from "yup";
import { STRIP_UNKNOWN } from "../constants/VALIDATOR";
import { Hasher } from "../utils/Hasher";

const schema = {
    create: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(40).required(),
        name: yup.string().min(3).max(25).required(),
    }),
    login: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(40).required(),
    }),
};

export class UserValidator {
    static create = async (req, _res, next) => {
        try {
            let { user } = req.body;
            user = await schema.create.validate(user, STRIP_UNKNOWN);
            user.password = await Hasher.hashPassword(user.password);
            req.body.user = user;
            return next();
        } catch (error) {
            next(error);
        }
    };

    static signIn = async (req, _res, next) => {
        try {
            let { user } = req.body;
            user = await schema.login.validate(user, STRIP_UNKNOWN);
            req.body.user = user;
            return next();
        } catch (error) {
            next(error);
        }
    };
}
