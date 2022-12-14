const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");

const { User } = require("../../database/models");
const app = require("../../api/app");

const {
  invalidLogin,
  loginResponse,
  validLogin,
  dbResponse,
} = require("../mocks/login.mocks");

const { expect } = chai;

chai.use(chaiHttp);

describe("Login", () => {
  it("should return 404 if user not found", async () => {
    sinon.stub(User, "findOne").resolves();

    const response = await chai.request(app).post("/login").send(invalidLogin);

    expect(response).to.have.status(404);
    expect(response.body).to.be.deep.equal({
      message: "Incorrect email or password",
    });

    sinon.restore();
  });

  it("should return 200 if found a user", async () => {
    sinon.stub(User, "findOne").resolves(dbResponse);

    const response = await chai.request(app).post("/login").send(validLogin);

    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.equal(loginResponse);

    sinon.restore();
  });
});
