const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
	/* VALIDATION */
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	const { email, password, firstName, lastName } = req.body;

	try {
		let user = await UserModel.findOne({
			email
		});
		/* User allreay exists */
		if (user) {
			return res.status(403).json({ message: 'User already exists' });
		}

		user = new UserModel();
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(String(password), salt);

		user.email = email;
		user.password = hashedPassword;
		user.firstName = firstName;
		user.lastName = lastName;

		await user.save();
		return res
			.status(200)
			.json({ message: 'User created', user: user });
	} catch (err) {
		console.log(err);
	}
};

exports.login = async (req, res, next) => {
	/* VALIDATION */
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	try {
		const user = await UserModel.findOne({
			email
		});

		/* user doesn't exist */
		if (!user) {
			return res.status(401).json({ message: 'Bad credentials' });
		}

		/* compare password */
		const compareResult = await bcrypt.compare(
			String(password),
			user.password
		);

		if (!compareResult) {
			return res.status(401).json({ message: 'Bad credentials ' });
		}

		/* user has credentials to log in -> Create TOKEN */
		const payload = {
			user: {
				id: user.id,
				email: user.email,
				profilePic: user.profilePic
			}
		};
		const options = { expiresIn: 3600 };
		const secret = config.get('jwtSecret');
		const token = jwt.sign(payload, secret, options);

		console.log('LOGIN OK........');
		return res.status(200).json({
			success: true,
			token
		});
	} catch (error) {
		console.log(error);
	}
};

exports.loginWithGoogle = (req, res) => {
	//added by google
	const { user } = req;
	if (!user) {
		return res.status(401).json({ message: 'Bad credentials.' });
	}
	/* create token */
	const payload = {
		user: {
			id: user.id,
			email: user.email,
			profilePic: user.profilePic
		}
	};
	const options = { expiresIn: 3600 };
	const secret = config.get('jwtSecret');
	const token = jwt.sign(payload, secret, options);
	res.redirect(`http://localhost:3000/?token=${token}`);
};

exports.getAuthenticatedUser = async (req, res) => {
	console.log(req.user);
	const { user } = req;
	if (!user) {
		return res.status(401).json({ message: 'Unauthorized.' });
	}

	try {
		let userData = await UserModel.findById(user.id).select(
			'-password'
		);
		return res.status(200).json(userData);
	} catch (error) {
		console.log(error);
	}
};
