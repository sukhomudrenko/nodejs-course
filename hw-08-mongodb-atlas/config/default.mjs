import 'dotenv/config'

export default Object.freeze({
	// mongoURI: `${process.env.MONGODB_URL_LOCAL}${process.env.DATABASE_NAME}`,
	mongoURI: `${process.env.MONGODB_URL}${process.env.DATABASE_NAME}`,
	port: process.env.PORT,
})
