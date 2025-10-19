const express = require('express');
const cors = require('cors');
const db = require('./app/models/index.js')
const authRoutes = require('./app/route/auth.routes.js')
const userRoutes = require('./app/route/user.routes.js')
// const mongoose = require('mongoose');
// const PORT = 3000
// require('dotenv').config();

const app = express();

const corsOptions = {
    origin: "http://localhost:8081",
}

app.use(express.json());

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.DBPASSWORD
})


app.use(cors);

// Get Request
app.get('/', (req, res) => {
    res.send('Get Request');
})

// Server Listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
