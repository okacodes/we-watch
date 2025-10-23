const express = require('express');
//const morgan = require('morgan');
// const cors = require('cors');
const db = require('./models/postgresdb')
const PORT = 3000
// require('dotenv').config();
const app = express();

//app.user(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'))

app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: true }));

connectDB()

// const pool = new Pool({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.DBPASSWORD
// })


// app.use(cors);

// Get Request
app.get('/', (req, res) => {
    res.send('Get Request');
})

// Server Listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
