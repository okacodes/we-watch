const express = require('express');
//const morgan = require('morgan');
// const cors = require('cors');
const userRoutes = require('./routes/user.js')
const authRoutes = require('./routes/auth.js')
const app = express();

console.log('MUST BE STARTED FROM /server')

// These will be implemented later
// app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'))
// app.use(cors);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

// Helps handle JSON and ensures URL encoding is handled properly
app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: true }));

// Get request 
app.get('/', (req, res) => {
    res.send('Get Request');
})

// Handles user authentication
app.use('/api', userRoutes)
app.use('/api', authRoutes)

// Server Listening
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening! Do things.`);
})

console.log('MUST BE STARTED FROM /server')
