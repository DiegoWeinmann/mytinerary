const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const passport = require('passport');
const auth = require('../middleware/auth');

const {
  register,
  login,
  loginWithGoogle,
  getAuthenticatedUser
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
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/users/google/redirect',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/login',
    session: false
  }),
  loginWithGoogle
);

router.route('/users/authenticated').get(auth, getAuthenticatedUser);

module.exports = router;
