require('dotenv').config({path: './.env'})
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


// This is the logic I'll use to check if a username is available
//const what = async () => {
//	const result = await pool.query(`SELECT 1 FROM users WHERE users.username='testuser'`)
//	const exists = result.rowCount > 0
//	if(exists){
//		console.log('exists')
//	} else {
//		console.log('nah')
//	}
//}
//what()

module.exports = {
	query: (text, params) => pool.query(text, params),
}
