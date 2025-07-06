const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Match .env

    // Attach user info to request
    req.user = {
      id: decoded.id,
      isAdmin: decoded.isAdmin || false
    };

    next(); // Proceed to protected route
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid token' });
  }
};
