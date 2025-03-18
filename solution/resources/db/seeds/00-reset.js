/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('transaction_log').del()
  await knex('accounts').del()
  await knex('users').del()
};
