const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const passport = require('passport');

const {
	register,
	login,
	loginWithGoogle,
	loginWithGoogleRedirect
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

router.get(
	'/users/google',
	passport.authenticate('google', { scope: ['profile'] })
);

router.get(
	'/users/google/redirect',
	passport.authenticate('google', {
		failureRedirect: 'http://localhost:3000/login'
	}),
	(req, res) => {
		return res.redirect('http://localhost:3000/');
	}
);

module.exports = router;
