import mongoose from 'mongoose'

const carBodyTypeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
		},
		code: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true },
)

export default mongoose.model('CarBodyTypeModel', carBodyTypeSchema, 'bodyTypes')
