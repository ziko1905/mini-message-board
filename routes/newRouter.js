const express = require("express")
const router = express.Router()
const messages = require("./indexRouter").messages

router.get("/new", (req, res) => {
    res.render("form", {pageTitle: "New Message"})
})

router.post("/new", (req, res, next) => {
    messages.push({text: req.body.message, user: req.body.username, added: new Date()})
    res.redirect('/')
})

module.exports = router