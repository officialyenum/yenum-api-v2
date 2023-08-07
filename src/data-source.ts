import "reflect-metadata"
import { DataSource } from "typeorm"
import { databaseConfig, databaseTestConfig } from "./config"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: databaseConfig.host,
    port: databaseConfig.port as number,
    username: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.db,
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"]
})

export const TestAppDataSource = new DataSource({
    type: "postgres",
    host: databaseTestConfig.host,
    port: databaseTestConfig.port as number,
    username: databaseTestConfig.user,
    password: databaseTestConfig.password,
    database: databaseTestConfig.db,
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    dropSchema: true,
})