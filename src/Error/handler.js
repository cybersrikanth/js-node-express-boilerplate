import { httpResponse } from "../utils/httpResponse";
import { HTTP_ERROR_RESPONSE } from "../constants/HTTP";

export const handler = (err, _req, res, _next) => {
    /* 
        Global error handler
    */
    switch (err.constructor.name) {
        case "CustomError":
            return httpResponse(err.http_code, err.message, res);

        case "ValidationError":
            return httpResponse(
                HTTP_ERROR_RESPONSE.UNPROCESSABLE_ENTITY,
                err.errors,
                res
            );

        case "JsonWebTokenError":
            return httpResponse(
                HTTP_ERROR_RESPONSE.BAD_REQUEST,
                "Token verification failed",
                res
            );

        case "MongoError":
            /* 
                If you want to handle more complex errors, split the code in seperate files
            */

            if (err.code === 11000) {
                return httpResponse(
                    HTTP_ERROR_RESPONSE.CONFLICT,
                    `${Object.keys(err.keyPattern)} already exists`,
                    res
                );
            }

        default:
            console.log(err);
            return httpResponse(
                HTTP_ERROR_RESPONSE.INTERNAL_SERVER_ERROR,
                "Something Went Wrong",
                res
            );
    }
};
