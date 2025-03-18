const Ajv = require('ajv')
const addFormats = require("ajv-formats")

const validateSchema = async (request, schemaDefinition) => {
    const ajv = new Ajv()
    addFormats(ajv)
    const validate = ajv.compile(schemaDefinition)
    const valid = await validate(request)
    if (!valid) {
        console.error(validate.errors)
    }
    return valid
}


module.exports = validateSchema