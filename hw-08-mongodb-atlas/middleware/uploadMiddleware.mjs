import multer from 'multer'

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'uploads-tmp')
	},
	filename(req, file, cb) {
		const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
		cb(null, unique + '-' + file.originalname)
	},
})

export default multer({ storage })
