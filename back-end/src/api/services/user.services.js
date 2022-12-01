const md5 = require('md5');
const { User } = require('../../database/models');
const { generateToken } = require('../helpers/generateToken');

const getUser = async (email, password ) => {
    const user = await User.findOne({
      where: { email, password: md5(password) },
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new Error('Not found');
    }

    const token = generateToken({ email, password });

    return token;
  };

module.exports = { getUser };

