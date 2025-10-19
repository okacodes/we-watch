const pg = require('pg');
const Pool = pg;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
    password: process.env.DBPASSWORD
})

console.log(await pool.query('SELECT NOW()'))