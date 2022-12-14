const validLogin = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

const invalidLogin = {
  email: "inexistent",
  password: "password",
};

const dbResponse = {
  dataValues: {
    name: "Delivery App Admin",
    role: "administrator",
  },
};

const loginResponse = {
  name: "Delivery App Admin",
  email: "adm@deliveryapp.com",
  role: "administrator",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IifQ.YGYHTyrRLZ-7L4dQAvJKbRVg3Racs61EIGaXdBZ1iBI",
};

const existentUser = {
  name: "Delivery App Admin",
  email: "adm@deliveryapp.com",
  password: "adminPassword",
};

const newUser = {
  name: "Gabriel Faustino",
  email: "faustino@email.com",
  password: "batata123",
};

const userCreated = {
  dataValues: {
    id: 4,
    name: "Gabriel Faustino",
    role: "customer",
    email: "faustino@email.com",
    password: "aca3ec7278a47144c0a863e60c595abe",
  },
};

const existentUserMessage = { message: "Email already registered" };

const registerResponse = {
  user: {
    name: "Gabriel Faustino",
    email: "faustino@email.com",
    role: "customer",
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FicmllbCBGYXVzdGlubyIsImVtYWlsIjoiZmF1c3Rpbm9AZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.85HOdiS2IZtrQsJP3oiE7bA02atSMCFKrYnp2eSLNko",
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IifQ.YGYHTyrRLZ-7L4dQAvJKbRVg3Racs61EIGaXdBZ1iBI";

module.exports = {
  validLogin,
  invalidLogin,
  dbResponse,
  loginResponse,
  existentUser,
  existentUserMessage,
  newUser,
  userCreated,
  registerResponse,
  token,
};
