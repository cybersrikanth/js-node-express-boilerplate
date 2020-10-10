export class CustomError {
    http_code = 500;
    message = "Internal Server Error";

    constructor(http_code, message) {
        this.http_code = http_code;
        this.message = message;
    }
}
