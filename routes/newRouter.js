const express = require("express")
const router = express()

router.get("/new", (req, res) => {
    res.render("form", {pageTitle: "New Message"})
})

module.exports = router