const db = require('../models/postgresdb')
const bcrypt = require('bcrypt')

module.exports = {
	getSignup: async(req, res) => {
		// TODO: add redirect if user logged in
		res.send('whoa')
		console.log('controller test 2')
	},

	postSignup: async(req, res) => {
		// Declares the username to check
		const { username, password } = req.body
		const checkQuery = {
			text: `SELECT * FROM users WHERE username = $1`,
			values: [`${username}`]
		}
		// Queries database for given username
		const result = await db.query(checkQuery)
		
		// Checks if a row exists with that given username(rowCount would be greater than 0),
		// then stores it as a boolean in the exists variable
		const exists = result.rowCount > 0

		if(!exists) {
			const hashedPassword = await bcrypt.hash(password, 10)
			console.log(hashedPassword)
			const registerQuery = {
				text: `INSERT INTO users(username, password) VALUES($1, $2)`,
				values: [`${username}`, `${hashedPassword}`]
			}
			
			await db.query(registerQuery)
			console.log('Success!')
			//const userSubmit = await db.query(`INSERT INTO users(username, password) VALUES('${username}', '${password}') RETURNING *`)
			//console.log(userSubmit)
			res.status(200).send({ message: 'Registration successful?' });
		} else {
			console.log('Fail...')
			res.status(418).send({ message: 'That username is taken.' });
		}
	},
}
