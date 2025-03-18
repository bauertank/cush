
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('transaction_log').insert(
        [
            {
                "id": 1,
                "account_id": 2,
                "value": 1540.55,
                "reference": "Interest",
                "created_at": "2025-02-10 21:16:36"
            },
            {
                "id": 2,
                "account_id": 2,
                "value": -500,
                "reference": "Withdrawal",
                "created_at": "2025-02-10 21:16:36"
            },
            {
                "id": 3,
                "account_id": 2,
                "value": 1000,
                "reference": "Deposit",
                "created_at": "2024-12-11 21:16:36"
            },
            {
                "id": 4,
                "account_id": 2,
                "value": 3000,
                "reference": "Transfer from ISA",
                "created_at": "2024-12-11 21:16:36"
            },
            {
                "id": 5,
                "account_id": 2,
                "value": 316.32,
                "reference": "Interest",
                "created_at": "2024-12-01 21:16:36"
            },
            {
                "id": 6,
                "account_id": 2,
                "value": 5000,
                "reference": "Initial Deposit",
                "created_at": "2024-11-01 21:16:36"
            },
            {
                "id": 7,
                "account_id": 1,
                "value": -3000,
                "reference": "Transfer to Equity Fund",
                "created_at": "2024-12-11 21:16:36"
            },
            {
                "id": 8,
                "account_id": 1,
                "value": 28000,
                "reference": "Initial Deposit",
                "created_at": "2024-04-11 21:16:36"
            }
        ]
    )
};
