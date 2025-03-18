const transactionsController = require('../../../../services/transactions/controllers/transactions')
const transactionsLogRepository = require('../../../../services/transactions/repositories/transaction-log')
const messageQueuer = require('./../../../../resources/events/message-queuer')

describe("TransactionsController", () => {
    test("it can calculate balance", async () => {
        const balance = await transactionsController.getAccountBalance(1)
        const expected = {
            account_id: 1,
            balance: 25000
        }
        expect(balance).toStrictEqual(expected)
    })

    test("it can get transactions by account", async () => {
        const transactions = await transactionsController.getTransactionsByAccount(1)
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

    test("it can accept transfer", async () => {
        const transaction = {
            "account_id": 1,
            "value": 3000,
            "reference": "Transfer to Equity Fund",
            "created_at": "2024-12-11T21:16:36Z"
        }

        jest.spyOn(messageQueuer, 'addToQueue').mockReturnValue(Promise.resolve());
        await transactionsController.acceptTransfer(transaction)
        expect(messageQueuer.addToQueue).toHaveBeenCalledTimes(2)
    })

    test("it can record transaction", async () => {
        const transaction = {
            "account_id": 1,
            "value": 3000,
            "reference": "Transfer to Equity Fund",
            "created_at": "2024-12-11T21:16:36Z"
        }

        jest.spyOn(messageQueuer, 'addToQueue').mockReturnValue(Promise.resolve());
        await transactionsController.recordTransaction(transaction)
        expect(messageQueuer.addToQueue).toHaveBeenCalledTimes(1)
    })

        test("it can save transaction", async () => {
            const newTransaction = await transactionsController.saveTransaction(
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
