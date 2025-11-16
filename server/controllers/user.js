const db = require('../models/postgresdb')
const bcrypt = require('bcrypt')
require('dotenv').config({path: 'server/.env'})

module.exports = {
//	getSignup: async(req, res) => {
//		// TODO: add redirect if user logged in
//		res.send('whoa')
//		console.log('controller test 2')
//	},

	postSignup: async(req, res) => {
		// Declares the username to check
		const { username, password } = req.body
		const checkQuery = {
			text: `select * from users where username = $1`,
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
			console.log('That username is unavailable')
			res.status(418).send({ message: 'That username is taken.' });
		}
	},

	postLogin: async(req, res) => {
		const { username, password } = req.body
		const checkUser = {
			text: `select * from users where username = $1`,
			values: [`${username}`]
		}
		// Queries database for given username
		const result = await db.query(checkUser)
		const exists = result.rowCount > 0
		
		if(exists) {
			const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

			//comparePassword ? res.status(200).send({ message: 'Login successful' }) :
			//	res.status(401).send({ message: 'Password incorrect.' })
			if (!comparePassword) {
				res.status(401.send({ message: 'Password incorrect.' }))
			}

			let data = {
				signInTime: Date.now(),
				username,
			}

			const token = jwt.sign(data, JWT_SECRET_KEY)
			res.status(200).json({ message: 'Success.', token })
		} else {
			res.status(401).send({ message: 'Gotta sign up mannnnn' })
		}
	}
}
