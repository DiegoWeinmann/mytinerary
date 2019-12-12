const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  console.log('AUTH MIDDLEWARE');
  let token;
  console.log(req.header('Authorization'));
  if (req.header('Authorization')) {
    // Bearer token
    // ["Bearer", "token"]
    token = req.header('Authorization').split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }

  console.log(token);

  try {
    console.log(config.get('jwtSecret'));
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
  }
};
