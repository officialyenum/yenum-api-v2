import * as express from "express";
import { Request, Response } from "express";
import { errorHandler, validateRequest } from "./middlewares";
import "express-async-errors";
import { json } from "body-parser";
import { NotFoundError } from "./errors";
import { Routes } from "./routes";
// import apiRoutes from './routes/api';

const app = express();
app.set('trust proxy', true);
app.use(json());
/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
// register express routes from defined application routes
Routes.forEach(route => {
    (app as any)[route.method](route.route,
        ...route.validation, validateRequest,
        async (req: Request, res: Response, next: Function) => {
        try {
            const result = await (new (route.controller as any))[route.action](req, res, next)
            res.json(result)
        } catch (error) {
            next(error);
        }
    })
})

app.all('*', async (req, res) => {
    throw new NotFoundError();
});
app.use(errorHandler);

export { app };