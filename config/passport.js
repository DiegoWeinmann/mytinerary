const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('config');
const secret = config.get('jwtSecret');
const UserModel = require('../models/User');

/* JWT stratedy */
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = secret;

module.exports = passport.use(
	new JwtStrategy(options, (jwt_payload, done) => {
		UserModel.findById(jwt_payload.id)
			.then(user => {
				if (user) {
					return done(null, user);
				}
				return done(null, false);
			})
			.catch(error => console.log(error));
	})
);
