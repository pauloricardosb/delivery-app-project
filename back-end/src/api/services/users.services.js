const { Op } = require('sequelize');
const { User } = require('../../database/models');

const getAll = async () => {
  const users = await User.findAll({
    where: { role: { [Op.not]: ['administrator'] } },
    attributes: ['name', 'email', 'role'],
  });

  if (!users) throw new Error('Users not found');

  return users;
};

module.exports = { getAll };