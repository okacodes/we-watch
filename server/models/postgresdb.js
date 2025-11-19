require('dotenv').config({path: 'server/.env'})
const pg = require('pg')
const { Pool } = pg;

// Connects to database, allows queries
const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE
})

module.exports = {
	query: (text, params) => pool.query(text, params),
}
