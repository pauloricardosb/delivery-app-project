const md5 = require('md5');
const { User } = require('../../database/models');
const { generateJWT } = require('../helpers/jwt');

const getUser = async (email, password) => {
  const user = await User.findOne({
    attributes: ['name', 'role'],
    where: {
      email,
      // checks if password equals encrypted password
      password: md5(password),
    },
  });

  if (!user) throw new Error('Incorrect email or password');

  const { name, role } = user.dataValues;
  // Generates token
  const token = generateJWT({ name, email, role });
  // API JSON response
  return { name, email, role, token };
};

const registerUser = async ({ name, role = 'customer', email, password }) => {
  // Checks if email already exists
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) throw new Error('Email already registered');

  // Checks if name already exists
  const userName = await User.findOne({ where: { name } });
  if (userName) throw new Error('Name already registered');

  // Creates user
  const { dataValues: newUser } = await User
    .create({ name, role, email, password: md5(password) });

  // Generates token
  const token = generateJWT({ name, email, role });

  return {
    user: {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    token,
  };
};

const getAll = async (filters) => {
  const users = await User.findAll({
    where: { role: filters },
    attributes: ['id', 'name', 'email', 'role'],
  });

  if (!users) throw new Error('Users not found');

  return users;
};

const deleteOne = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = { getUser, registerUser, getAll, deleteOne };
