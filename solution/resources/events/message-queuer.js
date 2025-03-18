const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs')
const sqs = new SQSClient({
    endpoint: process.env.SQS_QUEUE_URL,
    region: process.env.REGION
})

const addToQueue = async (message, queueName) => {
    try {
        return await sqs.send(new SendMessageCommand({
            QueueUrl: process.env.SQS_QUEUE_URL
                + process.env.AWS_ACCOUNT_ID
                + "/"
                + process.env.NODE_ENV
                + "-"
                + queueName,
            MessageBody: JSON.stringify(message)
        }));
    } catch (e) {
        throw e
    }
}

module.exports = { addToQueue }