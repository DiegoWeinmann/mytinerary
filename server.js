const express = require('express');
const app = express();
const router = express.Router();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 5000;

router.get('/', (req, res) => {
	res.json({
		msg: 'testing server'
	});
});

router.route('/test').get((req, res) => {
	res.json({ msg: 'Test Works' });
});

app.use('/', router);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
