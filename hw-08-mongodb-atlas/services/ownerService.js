import CarOwnerModel from '../models/CarOwnerModel.js'

export const getAllOwners = async () => {
	return await CarOwnerModel.find()
}

export const getOwnerById = async (id) => {
	return await CarOwnerModel.findById(id)
}

export const createOwner = async (ownerData) => {
	const newOwner = new CarOwnerModel(ownerData)
	return await newOwner.save()
}

export const updateOwner = async (id, ownerData) => {
	return await CarOwnerModel.findByIdAndUpdate(id, ownerData, {
		new: true,
		runValidators: true,
	})
}

export const deleteOwnerById = async (id) => {
	return await CarOwnerModel.findByIdAndDelete(id)
}
