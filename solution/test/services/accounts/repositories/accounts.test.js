const accountsRepository = require('../../../../services/accounts/repositories/accounts')

describe("AccountsRepository", () => {
    test("it can get", async () => {
        const account = await accountsRepository.get(1)
        const expected = {
            "id": 1,
            "user_id": 1,
            "account_number": 12345678,
            "account_name": "Cushon ISA"
        }

        expect(account).toStrictEqual(expected)
    })

    test("it can get by user id", async () => {
        const accounts = await accountsRepository.getByUserId(1)
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

    test("it can create", async () => {
        const newAccount = await accountsRepository.create(
            {
                "user_id": 1,
                "account_number": 5656565,
                "account_name": "Test Account"
            }
        )
        const account = await accountsRepository.get(newAccount[0])
        const expected = {
            id: account.id,
            "user_id": 1,
            "account_number": 5656565,
            "account_name": "Test Account"
        }

        expect(account).toStrictEqual(expected)
    })

    test("it can update", async () => {
        const newAccount = await accountsRepository.update(
            1,
            {
                "account_name": "Tester Account"
            }
        )
        const account = await accountsRepository.get(1)
        const expected = {
            id: 1,
            "user_id": 1,
            "account_number": 12345678,
            "account_name": "Tester Account"
        }

        expect(account).toStrictEqual(expected)
    })

})

