import request from "supertest";
import { expect } from "chai";
import app from "../api/server.mjs";


describe('API Test', ()=>{
    it('Root path', (done)=>{
        request(app)
            .get("/")
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err,res)=>{
                if (err) done (err);
                expect(res.statusCode).to.equals(200);
                done();
            });
    });
});