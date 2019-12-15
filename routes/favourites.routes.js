const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
	getUserFavourites,
	addUserFavouriteItinerary
} = require('../controllers/favourites.controller');

router
	.route('/users/:userId/favourites/all')
	.get(auth, getUserFavourites);
router
	.route('/users/:userId/favourites/:itineraryId')
	.post(auth, addUserFavouriteItinerary);

module.exports = router;
