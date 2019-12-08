const mongoose = require('mongoose');
const ItineraryModel = require('../models/Itinerary');

exports.getAllItineraries = async (req, res) => {
	const id = req.params.id;
	try {
		const itineraries = await ItineraryModel.find({
			city: mongoose.Types.ObjectId(id)
		}).populate('city', 'name');
		res.json(itineraries);
	} catch (error) {
		console.error(error);
	}
};

exports.getAllItineraries;
