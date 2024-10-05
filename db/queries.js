const pool = require("./pool.js")

const createMessage = async (message) => {
    const { text, added } = message
    try {
        await pool.query("INSERT INTO messages (text, added) VALUES $1 $2", [text, added])
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createMessage
}