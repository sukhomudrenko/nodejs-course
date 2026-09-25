import CarModel from '../models/CarModel.js'

export const getAllCars = async () => {
	return await CarModel.find().populate('owner').populate('bodyType')
}

export const getCarById = async (id) => {
	return await CarModel.findById(id).populate('owner').populate('bodyType')
}

export const createCar = async (carData) => {
	const newCar = new CarModel(carData)
	return await newCar.save()
}

export const updateCar = async (id, carData) => {
	return await CarModel.findByIdAndUpdate(id, carData, {
		new: true,
		runValidators: true,
	})
}

export const deleteCarById = async (id) => {
	return await CarModel.findByIdAndDelete(id)
}
