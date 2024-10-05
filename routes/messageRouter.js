const express = require("express")
const router = express.Router()

router.get("/message/:id", (req, res) => {
    const msg = "query from db - wip"
    if (!msg) throw "Invalid message identifier!"
    
    res.render("messagePage", {pageTitle: getPageTitle(msg.user, id) ,user: msg.user, message: msg.text, date: msg.added})
})

function getPageTitle(user, id) {
    return `Message - ${id} - from ${user}`
}

module.exports = router