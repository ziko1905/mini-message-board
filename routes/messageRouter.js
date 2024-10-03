const express = require("express")
const router = express.Router()
const messages = require("./indexRouter").messages

router.get("/message/:id", (req, res) => {
    const id = req.params.id
    const msg = messages[req.params.id]
    if (!msg) throw "Invalid message identifier!"
    
    res.render("messagePage", {pageTitle: getPageTitle(msg.user, id) ,user: msg.user, message: msg.text, date: msg.added})
})

function getPageTitle(user, id) {
    return `Message - ${id} - from ${user}`
}

module.exports = router