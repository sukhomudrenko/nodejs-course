import { buildCarFormData } from '../services/carFormData.js'
import * as carService from '../services/carService.js'
import { deleteFileFromDir } from '../utils/utils.js'

export function carsValidationMiddleware(validationSchema) {
	return async (req, res, next) => {
		const result = validationSchema.safeParse(req.body) // якщо є помилки валідації

		// якщо result не успішний а є помилки, то виконуємо наступні дії
		if (!result.success) {
			if (req.file) {
				deleteFileFromDir('uploads-tmp', req.file.filename)
			}

			let car = {}

			if (req.params.id) {
				car = await carService.getCarById(req.params.id)
			}

			return res.render(
				'cars/carForm',
				await buildCarFormData(
					{ ...car.toObject?.(), ...req.body, _id: car?._id, photo: car?.photo },
					result.error,
				),
			)
		}
		//якщо не було помилок валідації
		req.validatedCarsData = result.data

		//переходимо до наступного обробника
		next()
	}
}
