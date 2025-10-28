const express = require('express');
//const morgan = require('morgan');
// const cors = require('cors');
const userRoutes = require('./routes/user.js')
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
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening! Do things.`);
})

console.log('MUST BE STARTED FROM /server')
