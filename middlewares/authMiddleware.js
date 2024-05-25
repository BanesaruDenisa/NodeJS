const jwt = require('jsonwebtoken');
const db = require('../models');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('Not authorized');
  }

  const token = authorization.replace('Bearer ', '');
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const user = await db.User.findByPk(data.userId);
    if (!user) {
      return res.status(401).send('Not authorized');
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).send('Invalid token');
    }
    console.error('Error in authMiddleware:', err);
    res.status(500).send('Internal server error');
  }
};

module.exports = authMiddleware;


// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const JWT_SECRET = process.env.JWT_SECRET;
// const db = require('../models');

// const authMiddleware = async (req, res, next) => {
//   // Omite verificarea tokenului pentru testare
//   console.log("Middleware de autentificare sărit pentru testare");
//   next();
// };

// module.exports = authMiddleware;

