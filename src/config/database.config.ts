import 'dotenv/config'

export const databaseConfig = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "admin",
    db: process.env.DB_NAME || "postgres"
}

export const databaseTestConfig = {
    host: process.env.DB_TEST_HOST || "localhost",
    port: process.env.DB_TEST_PORT || 5432,
    user: process.env.DB_TEST_USER || "postgres",
    password: process.env.DB_TEST_PASSWORD || "admin",
    db: process.env.DB_TEST_NAME || "test"
}