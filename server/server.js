require('dotenv').config()
const { Pool } = require('pg');
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.DBPASSWORD
})


app.use(cors);
app.use(express.json());

// Get Request
app.get('/', (req, res) => {
    res.send('Get Request');
})

// Server Listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
