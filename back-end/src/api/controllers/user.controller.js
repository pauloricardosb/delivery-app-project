const { getUser, registerUser, getAll, deleteOne } = require('../services/user.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await getUser(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body); 
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const users = await getAll(['customer', 'seller']);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSellers = async (_req, res) => {
  try {
    const sellers = await getAll(['seller']);
    res.status(200).json(sellers);
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
    res.status(404).json({ message: 'User cannot be deleted' });
  }
};

module.exports = { login, register, getUsers, getSellers, deleteUser }; 