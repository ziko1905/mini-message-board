const express = require("express")
const router = express.Router()
const db = require("../db/queries")

router.get("/new", (req, res) => {
    res.render("form", {pageTitle: "New Message"})
})

router.post("/new", async (req, res, next) => {
    await db.createMessage({...req.body, added: new Date()})
    res.redirect('/')
})

module.exports = router