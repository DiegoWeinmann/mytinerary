const express = require('express');
const app = express();
const router = express.Router();
require('./config/db');
const CityModel = require('./models/City');

const port = process.env.PORT || 5000;

router.route('/cities/all').get(async (req, res) => {
	try {
		const cities = await CityModel.find();
		return res.json(cities);
	} catch (error) {
		console.log(error);
		return res.json({ msg: error.message });
	}
});

app.use('/', router);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
