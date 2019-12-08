const express = require('express');
const app = express();
require('./config/db');
const passport = require('passport');

const UserModel = require('./models/User');

const port = process.env.PORT || 5000;

/* STATIC CONTENT */
app.use(express.static('public'));

/* MIDDLEWARE */
app.use(express.json());
/* passport middleware */
app.use(passport.initialize());
/* passport configuration */
require('./config/passport');

/* passport test */
app.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		UserModel.findOne({ _id: req.user.id })
			.then(user => {
				res.json(user);
			})
			.catch(error => res.status(400).json(error));
	}
);

/* ******* ROUTES ********* */

/* CITY ROUTES */
app.use('/', require('./routes/city.routes'));
/* ITINERARY ROUTES */
app.use('/', require('./routes/itinerary.routes'));
/* ACTIVITY ROUTES */
app.use('/', require('./routes/activity.routes'));
/* AUTH ROUTES */
app.use('/', require('./routes/auth.routes'));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
