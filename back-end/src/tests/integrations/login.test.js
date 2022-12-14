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
  existentUser,
  existentUserMessage,
  newUser,
  userCreated,
  registerResponse,
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

describe("Register", () => {
  it("should return 409 if user email already registered", async () => {
    sinon.stub(User, "findOne").resolves(dbResponse);

    const response = await chai
      .request(app)
      .post("/register")
      .send(existentUser);

    expect(response).to.have.status(409);
    expect(response.body).to.be.deep.equal(existentUserMessage);

    sinon.restore();
  });

  it("should return 201 when register a new user", async () => {
    sinon.stub(User, "findOne").resolves();
    sinon.stub(User, "create").resolves(userCreated);

    const response = await chai.request(app).post("/register").send(newUser);

    expect(response).to.have.status(201);
    expect(response.body).to.be.deep.equal(registerResponse);

    sinon.restore();
  });
});
