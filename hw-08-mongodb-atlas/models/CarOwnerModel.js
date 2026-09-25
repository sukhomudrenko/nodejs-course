import mongoose from 'mongoose'

const carOwnerSchema = new mongoose.Schema(
	{
		address: {
			type: String,
			required: [true, 'Адреса має бути вказана'],
			trim: true,
		},
		fullName: {
			type: String,
			required: [true, 'Власник має бути вказаний'],
			trim: true,
		},
	},
	{ timestamps: true },
)
export default mongoose.model('CarOwnerModel', carOwnerSchema, 'owners')
