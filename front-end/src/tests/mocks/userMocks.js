const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';

const tokens = [
  `${key
  }eyJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1`
  + 'haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifQ.'
  + '3wxBDFOKTIhZ9CHxqkoZumFEjpvn7h6D5SDojiYi6NA',
  `${key
  }eyJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYU`
  + 'BkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIn0.'
  + 'BEywtOqdnnBnXC4_Q5y6EU9IF9zModhtll9VPUzHcm4',
  `${key
  }eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG`
  + '1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IifQ.'
  + 'YGYHTyrRLZ-7L4dQAvJKbRVg3Racs61EIGaXdBZ1iBI',
];

const users = [
  {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
    token: tokens[0],
  },
  {
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
    token: tokens[1],
  },
  {
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    role: 'administrator',
    token: tokens[2],
  },
];

const newUser = {
  user: {
    name: 'Novo Usuário',
    email: 'usuario@mail.com',
    role: 'customer',
  },
  token: `${key
  }.eyJuYW1lIjoiTm92byBVc8O6YXJpbyIsImVtYWlsIjoidXN1YXJ`
  + 'pb0BtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9'
  + '.Xs4Pf7TbZSqfH9RzVlBrh_wP2vLJyMGeQoA3EFrbK-M',
};

const usersDB = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
  },
  {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
  },
];

module.exports = { users, newUser, usersDB };
