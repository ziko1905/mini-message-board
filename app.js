const express = require("express")
const path = require("path")
const app = express()
const PORT = 3000;

app.set("views", path.join(__dirname, "views"))
app.set("view enigine", "ejs")

app.get("/", (req, res) => {
    res.send("Home page render.")
})

app.use((err, req, res, next) => {
    res.render("error", { errMsg: err })
})

app.listen(PORT, () => console.log("Listening on port: ", PORT))