const express = require("express")
const path = require("node:path")
const app = express()
const PORT = 3000;

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {pageTitle: "Mini Messanger"})
    // res.send("Homepage send")
})

app.get("/new", () => {
    app.render("new", {pageTitle: "New Message"})
})

app.use((err, req, res, next) => {
    res.stauts(500).render("error", { errMsg: err })
    console.log(err)
})

app.listen(PORT, () => console.log("Listening on port: ", PORT))