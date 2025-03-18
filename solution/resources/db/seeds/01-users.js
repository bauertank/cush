/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('users').insert(
        [
            {
                "id": 1,
                "first_name": "Test",
                "last_name": "User"
            },
            {
                "id": 2,
                "first_name": "Joe",
                "last_name": "Bloggs"
            },
            {
                "id": 3,
                "first_name": "Mary",
                "last_name": "Smith"
            }
        ]
    )
};
