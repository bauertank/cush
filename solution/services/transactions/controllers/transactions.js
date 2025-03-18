const transactionService = require('../services/transactions');

const getAccountBalance = async (accountId) => {
    const balance = await transactionService.calculateBalance(accountId)
    return {
        account_id: accountId,
        balance: balance
    }
}

const getTransactionsByAccount = async (accountId) => {
    return await transactionService.getTransactions(accountId)
}

const acceptTransfer = async (amount, sourceAccountId, destinationAccountId, reference) => {
    await recordTransaction(-(amount), sourceAccountId, reference)
    await recordTransaction(amount, destinationAccountId, reference)
}

const recordTransaction = async (amount, accountId, reference) => {
    await transactionService.recordTransaction(
        {
            account_id: accountId,
            value: amount,
            reference: reference,
        }
    )
}

const saveTransaction = async (transaction) => {
    return await transactionService.saveTransaction(transaction)
}

module.exports = {
    getAccountBalance,
    getTransactionsByAccount,
    acceptTransfer,
    recordTransaction,
    saveTransaction
};
