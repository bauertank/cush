const transactionsLogRepository = require('../../../../services/transactions/repositories/transaction-log')

describe("TransactionsLogRepository", () => {
    test("it can get", async () => {
        const transaction = await transactionsLogRepository.get(2)
        const expected = {
            "id": 2,
            "account_id": 2,
            "value": -500,
            "reference": "Withdrawal",
            "created_at": new Date("2025-02-10 21:16:36")
        }
        expect(transaction).toStrictEqual(expected)
    })

    test("it can get by account id", async () => {
        const transactions = await transactionsLogRepository.getByAccountId(1)
        const expected = [
            {
                "id": 7,
                "account_id": 1,
                "value": -3000,
                "reference": "Transfer to Equity Fund",
                "created_at": new Date("2024-12-11 21:16:36")
            },
            {
                "id": 8,
                "account_id": 1,
                "value": 28000,
                "reference": "Initial Deposit",
                "created_at": new Date("2024-04-11 21:16:36")
            }
        ]
        expect(transactions).toStrictEqual(expected)
    })

    test("it can create", async () => {
        const newTransaction = await transactionsLogRepository.create(
            {
                "account_id": 1,
                "value": -3000,
                "reference": "Transfer to Equity Fund",
                "created_at": "2024-12-11T21:16:36Z"
            }
        )
        const transaction = await transactionsLogRepository.get(newTransaction[0])
        const expected = {
            id: transaction.id,
            "account_id": 1,
            "value": -3000,
            "reference": "Transfer to Equity Fund",
            "created_at": new Date("2024-12-11 21:16:36")

        }

        expect(transaction).toStrictEqual(expected)
    })
})

