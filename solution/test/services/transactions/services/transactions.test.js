const transactionsService = require('../../../../services/transactions/services/transactions')
const transactionsLogRepository = require('../../../../services/transactions/repositories/transaction-log')
const messageQueuer = require('./../../../../resources/events/message-queuer')

describe("TransactionsService", () => {
    test("it can get transactions", async () => {
        const transactions = await transactionsService.getTransactions(1)
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

    test("it can record transaction", async () => {
        const transaction = {
            "account_id": 1,
            "value": -3000,
            "reference": "Transfer to Equity Fund",
            "created_at": new Date("2024-12-11 21:16:36")
        }
        jest.spyOn(messageQueuer, 'addToQueue').mockReturnValue(Promise.resolve());
        await transactionsService.recordTransaction(transaction)
        expect(messageQueuer.addToQueue).toHaveBeenCalledTimes(1)
    })

    test("it can calculate balance", async () => {
        const balance = await transactionsService.calculateBalance(1)
        const expected = 25000
        expect(balance).toStrictEqual(expected)
    })

    test("it can save transaction", async () => {
        const newTransaction = await transactionsService.saveTransaction(
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

    test("it can sum transaction values", async () => {
        const transactions = [
            {
                "id": 1,
                "account_id": 1,
                "value": -3000,
                "reference": "Transfer to Equity Fund",
                "created_at": new Date("2024-12-11 21:16:36")
            },
            {
                "id": 1,
                "account_id": 1,
                "value": -3050.28,
                "reference": "Transfer to Equity Fund",
                "created_at": new Date("2024-12-11 21:16:36")
            },
            {
                "id": 2,
                "account_id": 1,
                "value": 8060,
                "reference": "Initial Deposit",
                "created_at": new Date("2024-04-11 21:16:36")
            }
        ]
        const total = await transactionsService.sumTransactionValues(transactions)
        const expected = 2009.72
        expect(total.toFixed(2)).toStrictEqual(expected.toFixed(2))
    })
})

