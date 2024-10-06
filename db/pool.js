const { Pool } = require("pg")

console.log(process.env.DATABASE_PUBLIC_URL, "!DATABASE_PUBLIC_URL!")
module.exports = new Pool({
    connectionString: process.env.DATABASE_PUBLIC_URL
})