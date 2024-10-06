const express = require("express")
const router = express.Router()
const db = require("../db/queries")

router.get("/", async (req, res, next) => {
    try {
        res.render("index", {pageTitle: "Messages", messages: await db.getAllMessages()})
    } catch (err) {
        next(err)
    }
})

module.exports = {router,}