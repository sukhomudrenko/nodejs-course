import CarBodyTypeModel from '../models/CarBodyTypeModel.js'

export const getAllBodyTypes = async () => {
	return await CarBodyTypeModel.find()
}

export const getBodyTypeById = async (id) => {
	return await CarBodyTypeModel.findById(id)
}

export const createBodyType = async (bodyTypeData) => {
	const newBodyType = new CarBodyTypeModel(bodyTypeData)
	return await newBodyType.save()
}

export const updateBodyType = async (id, bodyTypeData) => {
	return await CarBodyTypeModel.findByIdAndUpdate(id, bodyTypeData, {
		new: true,
		runValidators: true,
	})
}

export const deleteBodyTypeById = async (id) => {
	return await CarBodyTypeModel.findByIdAndDelete(id)
}
