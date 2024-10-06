const pool = require("./pool.js")

const createMessage = async (message) => {
    const { text, added, username } = message
    console.log(message)
    try {
        await pool.query("INSERT INTO messages (text, added, username) VALUES ($1, $2, $3)", [text, added, username])
    } catch (err) {
        console.log(err)
    }
}

const getAllMessages = async () => {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
}

const getMessage = async (message) => {
    const { id } = message
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id])
    console.log(rows)
    return rows[0]
}

module.exports = {
    createMessage,
    getAllMessages,
    getMessage
}