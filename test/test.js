const express = require("express");
const chai = require("chai");
const request = require("supertest");
const app = express();
describe("POST Shorten URl ", () => {
  it("should Shorten body url", () => {
    request(app)
      .post("/api/shorten")
      .send({})
      .expect(201)
      .then((res) => {
        expect(res.headers.location).to.be.eql("/api/shorten");
      });
  });
});
