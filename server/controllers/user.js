const db = require('../models/postgresdb')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../../server/.env'})

module.exports = {
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
			const comparePassword = await bcrypt.compare(password, result.rows[0].password)
			
			if (!comparePassword) {
				res.status(400).send({ message: 'Login failed.' })
			} else {
				console.log('comparePassword test')
				const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
				let data = {
					signInTime: Date.now(),
					username
				}

			const token = jwt.sign(data, JWT_SECRET_KEY)
			res.cookie('jwt-token', token, {
					httpOnly: true,
					secure: false,
					maxAge: 60 * 60 * 1000,
					sameSite: 'Lax'
				})
			res.status(200).send({ message: 'Success.', token: token })
			}
		} else {
			res.status(400).send({ message: 'Login failed.' })
		}
	}
}
