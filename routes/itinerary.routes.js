const express = require('express');
const router = express.Router();

const {
	getAllItineraries
} = require('../controllers/itinerary.controller');

router
	.route('/cities/:id/mytineraries/all')

	/* GET /cities/:id/mytineraries/all */
	.get(getAllItineraries);

module.exports = router;
