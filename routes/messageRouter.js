const express = require("express")
const router = express.Router()
const db = require("../db/queries")

router.get("/message/:id", async (req, res) => {    
    const msg = await db.getMessage(req.params)
    if (!msg) throw "Invalid message identifier!"
    
    res.render("messagePage", {pageTitle: getPageTitle(msg.user, msg.id) ,user: msg.username, message: msg.text, date: msg.added})
})

function getPageTitle(user, id) {
    return `Message - ${id} - from ${user}`
}

module.exports = router