const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
	getFavouriteItineraries,
	addFavouriteItinerary,
	likeItinerary,
	unlikeItinerary
} = require('../controllers/favourites.controller');

/* FAVOURITE ITINERARIES ROUTES */
router
	.route('/users/:userId/favourites/all')
	.get(auth, getFavouriteItineraries);
router
	.route('/users/:userId/favourites/:itineraryId')
	.post(auth, addFavouriteItinerary);
/* LIKES */
router
	.route('/itineraries/:itineraryId/favourites/like')
	.put(auth, likeItinerary);
router
	.route('/itineraries/:itineraryId/favourites/unlike')
	.put(auth, unlikeItinerary);

module.exports = router;
