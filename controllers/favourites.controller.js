const UserModel = require('../models/User');
const ItineraryModel = require('../models/Itinerary');
const mongoose = require('mongoose');

exports.getFavouriteItineraries = async (req, res) => {
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
			favItineraries: user.favItineraries ? user.favItineraries : []
		});
	} catch (error) {
		console.log(error);
	}
};

exports.addFavouriteItinerary = async (req, res) => {
	const { userId, itineraryId } = req.params;
	try {
		const user = await UserModel.findById(userId);
		if (!user) {
			res.status(400).json({
				message: 'User not found.'
			});
		}

		if (
			user.favItineraries.includes(
				mongoose.Types.ObjectId(itineraryId)
			)
		) {
			const newFavs = user.favItineraries.filter(itinerary => {
				return itinerary.toString() !== itineraryId;
			});

			user.favItineraries = newFavs;

			await user.save();

			return res.status(200).json({
				message: 'Itinerary removed from favourites.',
				favItineraries: user.favItineraries
			});
		} else {
			user.favItineraries.push(mongoose.Types.ObjectId(itineraryId));

			await user.save();

			return res.status(201).json({
				message: 'Itinerary added to favourites.',
				favItineraries: user.favItineraries
			});
		}
	} catch (error) {
		console.log(error);
	}
};

exports.likeItinerary = async (req, res) => {
	const { id } = req.user;
	const { itineraryId } = req.params;

	try {
		const user = await UserModel.findById(id);
		if (!user) {
			return res.status(400).json({
				message: 'User not found.'
			});
		}

		const itinerary = await ItineraryModel.findById(itineraryId);

		if (!itinerary) {
			return res.status(400).json({
				message: 'Itinerary not found.'
			});
		}

		if (!user.likes.includes(mongoose.Types.ObjectId(itineraryId))) {
			user.likes.push(mongoose.Types.ObjectId(itineraryId));
			itinerary.likes += 1;

			await user.save();
			await itinerary.save();
			return res.status(200).json({
				message: 'Like added.',
				likes: itinerary.likes,
				user
			});
		} else {
			return res.status(400).json({
				message: 'You can like a itinerary two times.',
				user,
				itinerary
			});
		}
	} catch (error) {
		console.log(error);
	}
};

exports.unlikeItinerary = async (req, res) => {
	const { id } = req.user;
	const { itineraryId } = req.params;

	try {
		const user = await UserModel.findById(id);
		if (!user) {
			return res.status(400).json({
				message: 'User not found.'
			});
		}

		const itinerary = await ItineraryModel.findById(itineraryId);

		if (!itinerary) {
			return res.status(400).json({
				message: 'Itinerary not found.'
			});
		}

		if (user.likes.includes(mongoose.Types.ObjectId(itineraryId))) {
			user.likes = user.likes.filter(itinerary => {
				return itinerary.toString() !== itineraryId;
			});
			itinerary.likes =
				itinerary.likes <= 0 ? 0 : itinerary.likes - 1;

			await user.save();
			await itinerary.save();
			return res.status(200).json({
				message: 'Like removed.',
				likes: itinerary.likes,
				user
			});
		} else {
			return res.status(400).json({
				message: 'This itinerary is not in user likes.',
				user,
				itinerary
			});
		}
	} catch (error) {
		console.log(error);
	}
};
