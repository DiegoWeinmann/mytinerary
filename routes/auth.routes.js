const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const {
	register,
	login,
	loginWithGoogle
} = require('../controllers/auth.controller');

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

router.get('/users/google', loginWithGoogle);

module.exports = router;
