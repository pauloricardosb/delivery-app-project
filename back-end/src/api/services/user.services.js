const { User } = require('../../database/models');
const { generateToken } = require('../helpers/generateToken');

const getUser = async(email, password) => {
    await User.findOne({ 
        where: { email }, 
        attributes: {
            exclude: ['password']
        }
    })

    const token = await generateToken({ email, password });

    return token;
}

module.exports = { getUser };

