const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { register, login } = require('../controllers/auth.controller');

/* POST /create-new-account */
router.post(
	'/create-new-account',
	[
		check('email')
			.isEmail()
			.withMessage('Email is required'),
		check('password')
			.not()
			.isEmpty()
			.withMessage('Password is required'),
		check('firstName')
			.not()
			.isEmpty()
			.withMessage('First Name is required.'),
		check('lastName')
			.not()
			.isEmpty()
			.withMessage('Last Name is required.')
	],
	register
);

router.post(
	'/login',
	[
		check('email')
			.isEmail()
			.withMessage('Email is required.'),
		check('password')
			.not()
			.isEmpty()
			.withMessage('Password is required.')
	],
	login
);

module.exports = router;
