import * as ownersService from './ownerService.js'
import * as carBodyTypeService from './carBodyTypeService.js'

const toId = (value) => (value?._id ?? value)?.toString() ?? null

export async function buildCarFormData(car, error = null) {
	const [owners, bodyTypes] = await Promise.all([
		ownersService.getAllOwners(),
		carBodyTypeService.getAllBodyTypes(),
	])

	return {
		car,
		owners,
		bodyTypes,
		ownerId: toId(car.owner),
		bodyTypeId: toId(car.bodyType),
		errors: error?.issues.map((issue) => issue.message) ?? null,
		errorsByFiled: error
			? Object.fromEntries(error.issues.map((issue) => [issue.path[0], issue.message]))
			: null,
	}
}
