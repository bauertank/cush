const transactionController = require('../controllers/transactions')

module.exports.handler = async (event) => {
    try {
        for (var message of event.Records) {
            var messageBody = JSON.parse(message.body)
            if (messageBody.Type !== undefined && messageBody.Type == 'Notification') {
                await transactionController.saveTransaction(JSON.parse(messageBody.Message))
            } else {
                await transactionController.saveTransaction(messageBody)
            }
        }
    } catch (e) {
        console.error(e)
    }
};