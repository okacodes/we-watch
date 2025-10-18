const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000

app.use(cors);
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Fuckf23f32 man');
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
