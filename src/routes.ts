import { body, param } from "express-validator"
import { UserController } from "./controllers/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
    validation: []
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
    validation: [
        param('id').isInt(),
    ]
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
    validation: [
        body('firstName').isString().withMessage('First Name must be a string').notEmpty().withMessage('First Name is required'),
        body('lastName').isString().withMessage('Last Name must be a string').notEmpty().withMessage('Last Name is required'),
        body('age').isInt({ min: 0 }).notEmpty().withMessage('Age is required'),
    ]
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
    validation: [
        param('id').isInt(),
    ]
}]