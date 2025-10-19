require('dotenv').config({path: '../.env'})
const pg = require('pg')
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE
})

async function what(){
    console.log('0')
    console.log(process.env.PASSWORD)
    const result = await pool.query('SELECT * from users')
    console.log('1')
    console.log(result)
    console.log('2')
}
// what()

module.exports = 'postgresdb'