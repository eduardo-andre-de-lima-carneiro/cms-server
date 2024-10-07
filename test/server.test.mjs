import request from "supertest";
import { expect } from "chai";
import app from "../api/server.mjs";


describe('API Test', ()=>{
    it('Root path', ()=>{
        return request(app)
            .get("/")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).to.equals(200);
            });
    });
});