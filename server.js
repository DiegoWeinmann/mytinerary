const express = require('express');
const app = express();
const cors = require('cors');
require('./config/db');
const passport = require('passport');
const auth = require('./middleware/auth');

const UserModel = require('./models/User');

const port = process.env.PORT || 5000;

/* STATIC CONTENT */
app.use(express.static('public'));

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
/* passport middleware */
require('./config/passport');
app.use(passport.initialize());
/* passport configuration */

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
