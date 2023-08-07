import * as morgan from "morgan";
import { AppDataSource } from "./data-source";
import { appConfig } from "./config";
import { app } from "./app";

AppDataSource.initialize().then(async () => {

    // start express server
    app.listen(appConfig.port)
    console.log(`Express server has started on port ${appConfig.port}. Open http://localhost:${appConfig.port}/users to see results`)

}).catch(error => console.log(error))
