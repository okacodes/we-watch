require('dotenv').config({path: './.env'})
const pg = require('pg')
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE
})

const connectDB = async () => {
    console.log('0')
    const result = await pool.query('SELECT * from USERS')
    console.log('1')
    console.log(result)
    console.log('2')
}

module.exports = 'postgresdb'
module.exports = connectDB
