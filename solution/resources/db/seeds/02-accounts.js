/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('accounts').insert(
        [
            {
                "id": 1,
                "user_id": 1,
                "account_number": 12345678,
                "account_name": "Cushon ISA"
            },
            {
                "id": 2,
                "user_id": 1,
                "account_number": 56789012,
                "account_name": "Cushon Equities Fund"
            },
            {
                "id": 3,
                "user_id": 2,
                "account_number": 56789055,
                "account_name": "Cushon ISA"
            },
            {
                "id": 4,
                "user_id": 3,
                "account_number": 45454545,
                "account_name": "Cushon ISA"
            }
        ]
    );
};

