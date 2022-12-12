const { getAll, deleteOne } = require('../services/users.services');

const getUsers = async (_req, res) => {
  try {
    const users = await getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteOne(id);
    res.status(202).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getUsers, deleteUser };