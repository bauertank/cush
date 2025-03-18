const accountsController = require('../../../../services/accounts/controllers/accounts')

describe("AccountsController", () => {
    test("it can get accounts for user", async () => {
        const accounts = await accountsController.getAccountsForUser(1)
        const expected = [
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
            }
        ]

        expect(accounts).toStrictEqual(expected)
    })
})

