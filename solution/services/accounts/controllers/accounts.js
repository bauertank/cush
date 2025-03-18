const accountsRepository = require('../repositories/accounts');

const getAccountsForUser = async (userId) => {
    return await accountsRepository.getByUserId(userId)
}

module.exports = {
    getAccountsForUser
};
