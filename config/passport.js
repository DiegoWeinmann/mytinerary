const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('config');
const UserModel = require('../models/User');

/* JWT stratedy */
const jwt_options = {};
jwt_options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwt_options.secretOrKey = config.get('jwtSecret');

/* GOOGLE strategy */
const google_options = {};
google_options.clientID = config.get('googleClientID');
google_options.clientSecret = config.get('googleClientSecret');
google_options.callbackURL =
	'http://localhost:5000/users/google/redirect';

passport.use(
	new GoogleStrategy(
		google_options,
		async (accessToken, refreshToken, profile, done) => {
			console.log('PASO POR ACA');
			console.log(accessToken);
			console.log(profile);

			try {
				let user = await UserModel.findOne({
					googleId: profile.id
				});

				if (user) {
					return done(false, user);
				}

				user = new UserModel({
					email: profile.emails[0].value,
					googleId: profile.id,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName
				});
				await user.save();
				return done(false, user);
			} catch (error) {
				done(error, false);
				console.log(error);
			}
		}
	)
);

passport.use(
	new JwtStrategy(jwt_options, (jwt_payload, done) => {
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
