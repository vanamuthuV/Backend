const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'veluuma22',
    database: 'naruto_anime',
    host: 'localhost',
    port : 5432
})

const poolanimes = new Pool({
    user: 'postgres',
    password: 'veluuma22',
    database: 'Anime',
    host: 'localhost',
    port : 5432
})

module.exports = {pool, poolanimes}