const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: function() {
			return this.googleId === '';
		}
	},
	profilePic: {
		type: String,
		required: false
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: false
	},
	googleId: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('User', UserModel, 'users');
