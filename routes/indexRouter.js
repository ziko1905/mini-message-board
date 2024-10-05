const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
    try {
        res.render("index", {pageTitle: "Messages", "will be queried from db - wip"})
    } catch (err) {
        next(err)
    }
})

module.exports = {router,}