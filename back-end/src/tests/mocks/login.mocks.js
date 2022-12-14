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

module.exports = { validLogin, invalidLogin, dbResponse, loginResponse };
