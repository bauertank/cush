const db = require('../resources/db')

beforeEach(async () => {
    await db.seed.run(
        { directory: __dirname + './../resources/db/seeds' }
    )
    jest.clearAllMocks()
})
