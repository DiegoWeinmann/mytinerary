const CityModel = require('../models/City');

exports.getAllCities = async (req, res) => {
	try {
		const cities = await CityModel.find();
		return res.json(cities);
	} catch (error) {
		console.log(error);
		return res.json({ msg: error.message });
	}
};
