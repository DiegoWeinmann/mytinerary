const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
	console.log('AUTH MIDDLEWARE');
	let token;
	if (req.header('Authorization')) {
		// Bearer token
		// ["Bearer", "token"]
		token = req.header('Authorization').split(' ')[1];
	}

	if (!token) {
		return res.status(401).json({ message: 'Unauthorized.' });
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		console.log('TOKEN PAYLOAD');
		console.log(decoded);
		req.user = decoded.user;
		next();
	} catch (error) {
		console.log(error);
	}
};
