const transactionLogRepository = require('../repositories/transaction-log')
const messageQueuer = require('../../../resources/events/message-queuer')

const recordTransaction = async (transaction) => {
    await messageQueuer.addToQueue(transaction, "TransactionQueue")
}

const getTransactions = async (accountId) => {
    return await transactionLogRepository.getByAccountId(accountId)
}

const calculateBalance = async (accountId) => {
    const transactions = await getTransactions(accountId)
    return sumTransactionValues(transactions)
}

const sumTransactionValues = (transactions) => {
    return transactions.reduce(function (acc, obj) { return acc + obj.value }, 0)
}

const saveTransaction = async (transaction) => {
    return await transactionLogRepository.create(transaction)
}

module.exports = {
    getTransactions,
    recordTransaction,
    calculateBalance,
    saveTransaction,
    sumTransactionValues
};
