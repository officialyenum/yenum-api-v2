import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";


export class RequestValidationError extends CustomError {
    statusCode = 400;
    constructor(private errors: ValidationError[]) {
        super('Invalid Request Parameters');
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(){
        return this.errors.map((error:any) => {
            return { message: error.msg, field: error.path};
        })
    }
}