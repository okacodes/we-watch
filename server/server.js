const express = require('express');
//const morgan = require('morgan');
// const cors = require('cors');
const db = require('./models/postgresdb')
const userRoutes = require('./routes/user.js')
const PORT = 3000
const app = express();

console.log('MUST BE STARTED FROM /server')

// These will be implemented later
// app.user(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'))
// app.use(cors);

// Helps handle JSON and ensures URL encoding is handled properly
app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: true }));

// Get request 
app.get('/', (req, res) => {
    res.send('Get Request');
})

// Handles user authentication
app.use('/users', userRoutes)

// Server Listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

console.log('MUST BE STARTED FROM /server')
