const md5 = require('md5');
const { User } = require('../../database/models');
const { generateToken } = require('../helpers/jwt');

const getUser = async (email, password ) => {

  const user = await User.findOne({
    attributes: ['name', 'role'],
    where: {
      email,
      password: md5(password),
    },
  });

    if (!user) {
      throw new Error('Incorrect email or password');
    }

    const { name, role } = user.dataValues;

    token = generateToken({ email, role });

    return { name, email, role, token };
  };

const registerUser = async ({ name, role = 'customer', email, password }) => {
    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) throw new Error('Email already registered');
  
    const userName = await User.findOne({ where: { name } });
    if (userName) throw new Error('Name already registered');
  
    const { dataValues: newUser } = await User
      .create({ name, role, email, password: md5(password) });
    
    return { 
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    };
  };

module.exports = { getUser, registerUser };

