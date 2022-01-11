const jwt = require('jsonwebtoken');

function generateToken (payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

function verifyToken (token) {
  const verify = jwt.verify(token, process.env.JWT_SECRET)
  return verify;
}

module.exports = {
  generateToken,
  verifyToken
};