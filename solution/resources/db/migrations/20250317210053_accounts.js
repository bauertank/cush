/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('accounts', function (table) {
        table.increments()
        table.integer('user_id').unsigned().notNullable().references('users.id');
        table.integer('account_number')
        table.string('account_name')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
