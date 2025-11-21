const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../../server/.env'})

module.exports = {
	checkToken: async(req, res) => {
		const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
		const token = req.cookies['jwt-token']
		try {
			const verified = jwt.verify(token, JWT_SECRET_KEY)
			if (verified) {
				console.log('Passed verified check.')
				return res.status(200).send({ message: 'Success.' })
			}
		} catch (err) {
			console.log('Failed verified check.')
			return res.status(400).send({ message: 'Not authorized.' })
		}
	}
}
