const ActivityModel = require('../models/Activity');

exports.getAllActivities = async (req, res) => {
	const itineraryId = req.params.itineraryId;
	try {
		const activities = await ActivityModel.find({
			itinerary: itineraryId
		}).populate('itinerary');
		res.json(activities);
	} catch (error) {
		console.log(error);
	}
};
