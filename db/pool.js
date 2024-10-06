const { Pool } = require("pg")
if (process.env.NODE_ENV == 'DEV')require("dotenv").config()


module.exports = new Pool({
    connectionString: process.env.DATABASE_PUBLIC_URL
})