module.exports = {
	getSignup: async(req, res) => {
		res.send('whoa')
		console.log('controller test 2')
	},

	postSignup: async(req, res) => {
		res.send('sql query placeholder')	
	}
}
