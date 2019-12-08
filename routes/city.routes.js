const express = require('express');
const router = express.Router();
const {
	getAllCities,
	getCityById
} = require('../controllers/city.controller');

router
	.route('/cities/all')

	/* GET /cities/all */
	.get(getAllCities);

module.exports = router;
