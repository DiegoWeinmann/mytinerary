const mongoose = require('mongoose');
require('../config/db');
const ItineraryModel = require('../models/Itinerary');

async function createMytineraryData() {
	const BARCELONA = '5db52a8a8e8ba1585ae7bfd1';

	const it1 = new ItineraryModel({
		city: mongoose.Types.ObjectId(BARCELONA),
		title: 'Gaudi in a Day',
		profilePic: 'GaudiLover.png',
		rating: 34,
		duration: 12,
		price: 300,
		hashtag: ['Art', 'Architecture', 'History']
	});

	const it2 = new ItineraryModel({
		city: mongoose.Types.ObjectId(BARCELONA),
		title: 'Tappa Till YOi Droppa',
		profilePic: 'HambreAlumna.png',
		rating: 24,
		duration: 4,
		price: 150,
		hashtag: ['Restaurants', 'Food&Drink']
	});

	try {
		await it1.save();
		await it2.save();
		console.log('Data created succesfully!');
	} catch (error) {
		console.log(error);
	}
}

createMytineraryData();
