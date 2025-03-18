const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals: [
    'pg',
    'pg-native',
    'pg-query-stream',
    'sqlite3',
    'better-sqlite3',
    'mysql',
    'oracledb',
    'tedious'
  ],
  optimization: {
    nodeEnv: false
  }
}
