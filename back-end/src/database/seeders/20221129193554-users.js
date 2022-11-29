module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Zé Birita',
      email: 'ze.birita@mail.com',
      password: 'aca3ec7278a47144c0a863e60c595abe',
      role: 'customer',
    },
    {
      name: 'Fulano Birita',
      email: 'fulano.birita@mail.com',
      password: 'aca3ec7278a47144c0a863e60c595abe',
      role: 'seller',
    },
    {
      name: 'Tereza',
      email: 'tereza@mail.com',
      password: 'aca3ec7278a47144c0a863e60c595abe',
      role: 'admin',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
