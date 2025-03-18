/** @type {import('jest').Config} */
const config = {
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['<rootDir>/test/setup-jest.js'],
    forceExit: true,
};

module.exports = config;