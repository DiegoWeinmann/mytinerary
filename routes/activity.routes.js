const express = require('express');
const router = express.Router();

const {
	getAllActivities
} = require('../controllers/activity.controller');

router
	.route('/activities/:itineraryId')

	/* GET /activities/itineraryId */
	.get(getAllActivities);

module.exports = router;
