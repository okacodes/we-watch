const db = require('../models/postgresdb')

module.exports = {
	getSignup: async(req, res) => {
		// TODO: add redirect if user logged in
		res.send('whoa')
		console.log('controller test 2')
	},

	postSignup: async(req, res) => {
		// Declares the username to check
		const userTest = req.body.userTest
		// Queries database for given username
		const result = await db.query(`SELECT * FROM users WHERE username = '${userTest}'`)
		
		// Checks if a row exists with that given username(rowCount would be greater than 0),
		// then stores it as a boolean in the exists variable
		const exists = result.rowCount > 0
		console.log(exists)
	}
}
