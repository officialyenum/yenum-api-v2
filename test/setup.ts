import { TestAppDataSource } from "../src/data-source";
import { app } from "../src/app";
import * as request from "supertest";
import { DataSource } from "typeorm";

let dataSource: DataSource, server;
declare global {
    var testSignUp: () => Promise<string[]>;
}

beforeAll(async () => {
    dataSource = await TestAppDataSource.initialize()
    await dataSource.synchronize(true)

    server = app.listen(3333);
});

beforeEach(async () => {
    /** */
})

afterAll(async () => {
    dataSource.destroy();
    server.close();
});

global.testSignUp = async () => {
    const email = 'test@test.com';
    const password = 'password';

    const response = await request(app)
            .post('/api/users/signup')
            .send({ email, password })
            .expect(201);
    const cookie = response.get('Set-Cookie');
    return cookie;
}