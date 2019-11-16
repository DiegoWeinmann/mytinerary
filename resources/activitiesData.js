const mongoose = require('mongoose');
require('../config/db');
const ActivityModel = require('../models/Activity');

async function createActivityData() {
	const gaudiInADayID = '5dcb45f5f49b022168e60a8e';
	const tappaDroppa = '5dcb45f5f49b022168e60a8f';

	// Gaudy in a day
	const act1 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(gaudiInADayID),
		title: 'Casa Battlo'
	});

	const act2 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(gaudiInADayID),
		title: 'La Pedrera'
	});

	const act3 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(gaudiInADayID),
		title: 'Sagrada Familia'
	});

	const act4 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(gaudiInADayID),
		title: 'Park Güell'
	});

	// Tapa Till you Droppa
	const act5 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(tappaDroppa),
		title: 'Bar del Pla'
	});

	const act6 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(tappaDroppa),
		title: 'Tapas la Bona Sord'
	});

	const act7 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(tappaDroppa),
		title: 'Elsa y Fred'
	});

	const act8 = ActivityModel({
		itinerary: mongoose.Types.ObjectId(tappaDroppa),
		title: 'Bar Barcelona'
	});

	try {
		await act1.save();
		await act2.save();
		await act3.save();
		await act4.save();
		await act5.save();
		await act6.save();
		await act7.save();
		await act8.save();
		console.log('Data created succesfully!');
	} catch (error) {
		console.log(error);
	}
}

createActivityData();
