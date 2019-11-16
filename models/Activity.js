const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
	itinerary: {
		type: Schema.Types.ObjectId,
		ref: 'Itinerary',
		required: true
	},
	title: {
		type: String,
		required: true
	},
	image: {
		type: String
	}
});

module.exports = mongoose.model('Activity', ActivitySchema);


