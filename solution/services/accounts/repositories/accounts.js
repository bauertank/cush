const db = require('../../../resources/db')
const schemaValidation = require('../../../resources/helpers/schema-validation')

const createSchemaDefinition = {
    type: "object",
    properties: {
        user_id: { type: "integer" },
        account_number: { type: "integer" },
        account_name: { type: "string", maxLength: 50 },
    },
    required: ["user_id", "account_number", "account_name"],
    additionalProperties: false
}

const updateSchemaDefinition = {
    type: "object",
    properties: {
        user_id: { type: "integer" },
        account_number: { type: "integer" },
        account_name: { type: "string", maxLength: 50 },
    },
    required: [],
    additionalProperties: false
}

const get = async (id) => {
    return db.select().from('accounts').where('id', id).first()
}

const getByUserId = async (userId) => {
    return db.select().from('accounts').where('user_id', userId)
}

const create = async (account) => {
    try {
        const valid = await schemaValidation(account, createSchemaDefinition)

        if (!valid) {
            throw new Error('Invalid Request - fields are not in the correct format')
        }

        return await db('accounts').insert(account)

    } catch (e) {
        throw e
    }
}

const update = async (id, account) => {
    try {
        const valid = await schemaValidation(account, updateSchemaDefinition)
        if (!valid) {
            throw new Error('Invalid Request - fields are not in the correct format')
        }

        return await db('accounts').where({ id: id }).update(account)
    } catch (e) {
        throw e
    }
}

module.exports = {
    get,
    getByUserId,
    create,
    update,
}