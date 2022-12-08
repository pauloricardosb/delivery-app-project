const { getAll } = require('../services/users.services');

const getUsers = async (_req, res) => {
  try {
    const users = await getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getUsers };