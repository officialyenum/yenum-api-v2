import 'dotenv/config';

export const appConfig = {
    name: process.env.NAME || "Node Application",
    port: process.env.PORT || 3002
}