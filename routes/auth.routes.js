const express = require('express');
const router = express.Router;

const { register } = require('../controllers/auth.controller');

router
	.route('/create-new-account')

	/* POST /create-new-account */
	.post(register);

module.exports = router;
