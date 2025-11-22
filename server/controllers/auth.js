const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../../server/.env'})

module.exports = {
	checkToken: async(req, res) => {
		const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
		const token = req.cookies['jwt-token']
		try {
			const verified = jwt.verify(token, JWT_SECRET_KEY)
			console.log('Passed verified check.')
			return res.status(200).send({ message: 'Success.' })
		} catch (err) {
			console.log('Failed verified check.')
			return res.status(400).send({ message: 'Not authorized.' })
		}
	},

	clearToken: async(req, res) => {
		try {
			res.cookie('jwt-token', '')
			//req.clearCookie('jwt-token')
			return res.status(200).send({ message: 'Logged out.' })
		} catch ( err ) {
			console.log('Logging out failed?')
			return res.status(400).send({ message: 'Logging out failed?' })
		}
	}
}
