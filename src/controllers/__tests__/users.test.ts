import { app } from "../../app";
import * as request from "supertest";

const testUser = {
    firstName: "yenum",
    lastName: "opone",
    age: 18
}

it('should be no users initially', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
});

it('should create user', async () => {
    const response = await request(app).post('/users').send(testUser);
    expect(response.statusCode).toBe(200);
    testUser['id'] = response.body.id;
    expect(response.body).toEqual({ ...testUser });
});