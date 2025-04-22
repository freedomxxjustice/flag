const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'flag',
    password: 'flag',
    host: 'localhost',
    port: 5432,
    database: 'flags'
})

module.exports = pool;