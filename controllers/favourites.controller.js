const UserModel = require('../models/User');
const mongoose = require('mongoose');

exports.getUserFavourites = async (req, res) => {
	const { userId } = req.params;
	try {
		const user = await UserModel.findById(userId);
		console.log(user);
		if (!user) {
			res.status(400).json({
				message: 'User not found.'
			});
		}

		res.status(200).json({
			favourites: user.favourites ? user.favourites : []
		});
	} catch (error) {
		console.log(error);
	}
};

exports.addUserFavouriteItinerary = async (req, res) => {
	const { userId, itineraryId } = req.params;
	try {
		const user = await UserModel.findById(userId);
		if (!user) {
			res.status(400).json({
				message: 'User not found.'
			});
		}

		if (
			user.favourites.includes(mongoose.Types.ObjectId(itineraryId))
		) {
			const newFavs = user.favourites.filter(itinerary => {
				return itinerary.toString() !== itineraryId;
			});

			user.favourites = newFavs;

			await user.save();

			debugger;
			return res.status(200).json({
				message: 'Itinerary removed from favourites.',
				favourites: user.favourites
			});
		} else {
			user.favourites.push(mongoose.Types.ObjectId(itineraryId));
			debugger;
			return res.status(201).json({
				message: 'Itinerary added to favourites.',
				favourites: user.favourites
			});
		}
	} catch (error) {
		console.log(error);
	}
};
