const express = require("express")
const router = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

router.get("/", (req, res, next) => {
    console.log("Called")
    try {
        res.render("index", {pageTitle: "Messages", messages})
    } catch (err) {
        next(err)
    }
})

module.exports = {router, messages}