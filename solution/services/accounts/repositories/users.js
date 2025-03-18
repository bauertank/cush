const db = require('../../../resources/db')
const schemaValidation = require('../../../resources/helpers/schema-validation')

const createSchemaDefinition = {
    type: "object",
    properties: {
        first_name: { type: "string" },
        last_name: { type: "string" },
    },
    required: ["first_name", "last_name"],
    additionalProperties: false
}

const updateSchemaDefinition = {
    type: "object",
    properties: {
        first_name: { type: "string" },
        last_name: { type: "string" },
    },
    required: [],
    additionalProperties: false
}

const get = async (id) => {
    return db.select().from('users').where('id', id).first()
}

const create = async (user) => {
    try {
        const valid = await schemaValidation(user, createSchemaDefinition)

        if (!valid) {
            throw new Error('Invalid Request - fields are not in the correct format')
        }

        return await db('users').insert(user)

    } catch (e) {
        throw e
    }
}

const update = async (id, user) => {
    try {
        const valid = await schemaValidation(user, updateSchemaDefinition)
        if (!valid) {
            throw new Error('Invalid Request - fields are not in the correct format')
        }

        return await db('users').where({ id: id }).update(user)
    } catch (e) {
        throw e
    }
}

const remove = async (id) => {
    try {
        return await db('users').where('id', id).del()
    } catch (e) {
        throw e
    }
}

module.exports = {
    get,
    create,
    update,
    remove
}