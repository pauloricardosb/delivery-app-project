const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");

const { User } = require("../../database/models");
const app = require("../../api/app");

const { token } = require("../mocks/login.mocks");
const { allUsers } = require("../mocks/users.mocks");

const { expect } = chai;

chai.use(chaiHttp);

describe("Users", () => {
  it("should return 404 if don't find any users", async () => {
    sinon.stub(User, "findAll").resolves();

    const response = await chai
      .request(app)
      .get("/users")
      .set("Authorization", token);

    expect(response).to.have.status(404);
    expect(response.body).to.be.deep.equal({ message: "Users not found" });

    sinon.restore();
  });

  it("should return 200 when find users", async () => {
    sinon.stub(User, "findAll").resolves(allUsers);

    const response = await chai
      .request(app)
      .get("/users")
      .set("Authorization", token);

    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.equal(allUsers);

    sinon.restore();
  });

  it("should return 404 when cannot delete a user", async () => {
    sinon.stub(User, "destroy").throws();

    const response = await chai
      .request(app)
      .delete("/users/4")
      .set("Authorization", token);

    expect(response).to.have.status(404);
    expect(response.body).to.be.deep.equal({
      message: "User cannot be deleted",
    });
    sinon.restore();
  });

  it("should return 202 when delete a user", async () => {
    sinon.stub(User, "destroy").resolves();

    const response = await chai
      .request(app)
      .delete("/users/4")
      .set("Authorization", token);

    expect(response).to.have.status(202);
    sinon.restore();
  });
});
