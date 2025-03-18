const db = require('../../../resources/db')
const schemaValidation = require('../../../resources/helpers/schema-validation')

const createSchemaDefinition = {
    type: "object",
    properties: {
        account_id: { type: "integer" },
        value: { type: "number" },
        reference: { type: "string" },
        created_at: { type: "string", format: "date-time" },
    },
    required: ["account_id", "value", "reference"],
    additionalProperties: false
}

const get = async (id) => {
    return db.select().from('transaction_log').where('id', id).first()
}

const getByAccountId = async (accountId) => {
    return db.select().from('transaction_log').where('account_id', accountId).orderBy('created_at', 'desc')
}

const create = async (user) => {
    try {
        const valid = await schemaValidation(user, createSchemaDefinition)

        if (!valid) {
            throw new Error('Invalid Request - fields are not in the correct format')
        }

        return await db('transaction_log').insert(user)

    } catch (e) {
        throw e
    }
}

module.exports = {
    get,
    getByAccountId,
    create
}