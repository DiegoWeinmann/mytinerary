const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
	console.log(req.body);
	const {
		email,
		password,
		profilePic,
		firstName,
		lastName
	} = req.body;

	try {
		let user = UserModel.findOne({
			email
		});

		if (!user) {
			return res.status(403).json({ message: 'User already exists' });
		}

		user = new UserModel();
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		if (email) user.email = email;
		if (hashedPassword) user.password = hashedPassword;
		if (profilePic) user.profilePic = profilePic;
		if (firstName) user.firstName = firstName;
		if (lastName) user.lastName = lastName;

		await user.save();
		return res
			.status(401)
			.json({ message: 'User created', user: user });
	} catch (err) {
		console.log(err);
	}
};
