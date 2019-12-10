const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
	let token;
	if (req.header('Authorization')) {
		token = req.header('Authorization').split(' ')[1];
	}

	if (!token) {
		return res.status(401).json({ message: 'Unauthorized.' });
	}

	try {
		const decoded = jwt.decode(token, config.get('jwtSecret'));
		console.log(decoded);
		req.user = decoded.user;
		next();
	} catch (error) {
		console.log(error);
	}
};
