/* eslint-disable max-len */
const users = [
  {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifQ.3wxBDFOKTIhZ9CHxqkoZumFEjpvn7h6D5SDojiYi6NA',
  },
  {
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIn0.BEywtOqdnnBnXC4_Q5y6EU9IF9zModhtll9VPUzHcm4',
  },
  {
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    role: 'administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IifQ.YGYHTyrRLZ-7L4dQAvJKbRVg3Racs61EIGaXdBZ1iBI',
  },
];

const newUser = {
  user: {
    name: 'Novo Usuário',
    email: 'usuario@mail.com',
    role: 'customer',
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTm92byBVc8O6YXJpbyIsImVtYWlsIjoidXN1YXJpb0BtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9.Xs4Pf7TbZSqfH9RzVlBrh_wP2vLJyMGeQoA3EFrbK-M',
};

module.exports = { users, newUser };
