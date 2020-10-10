import { CustomError } from "./CustomError";
import { HTTP_ERROR_RESPONSE } from "../constants/HTTP";

/* 
    Common errors
*/
const ACCESS = {
    UN_AUTHORIZED: new CustomError(
        HTTP_ERROR_RESPONSE.UN_AUTHORIZED,
        "Request not authorized"
    ),
    SESSION_EXPIRED: new CustomError(
        HTTP_ERROR_RESPONSE.FORBIDDEN,
        "Session expired"
    ),
    NO_TOKEN: new CustomError(HTTP_ERROR_RESPONSE.FORBIDDEN, "Invalid Token"),
};

const AUTH = {
    LOGIN: new CustomError(
        HTTP_ERROR_RESPONSE.FORBIDDEN,
        "Invalid email or password"
    ),
};

export const ERRORS = {
    ACCESS,
    AUTH,
};
