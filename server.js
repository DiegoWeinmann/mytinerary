const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

/* STATIC CONTENT */
app.use(express.static('public'));

/* MIDDLEWARE */
app.use(express.json());

/* ******* ROUTES ********* */

/* CITY ROUTES */
app.use('/', require('./routes/city.routes'));
/* ITINERARY ROUTES */
app.use('/', require('./routes/itinerary.routes'));
/* ACTIVITY ROUTES */
app.use('/', require('./routes/activity.routes'));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
