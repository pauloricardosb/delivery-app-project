const fs = require('fs');

const getImage = async (req, res) => {
  const { image } = req.params;

  try {
    const imageDB = fs.readFileSync(`./public/images/${image}`);
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(imageDB); 
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getImage };