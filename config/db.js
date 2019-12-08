const mongoose = require('mongoose');
const config = require('config');
const URI = config.get('mongoURI');

class Database {
	constructor() {
		this._connect();
	}

	async _connect() {
		mongoose
			.connect(URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true
			})
			.then(() => console.log('MongoDB connected'))
			.catch(error => {
				console.log(error.message);
				process.exit(1);
			});
	}
}

module.exports = new Database();
