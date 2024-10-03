const express = require("express")
const router = express.Router()

router.get("/new", (req, res) => {
    res.render("form", {pageTitle: "New Message"})
})

router.post("/new", (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router