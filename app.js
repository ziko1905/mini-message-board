const express = require("express")
const path = require("node:path")
const path = require("node:path")
const app = express()
const PORT = 3000;

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

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
  

app.get("/", (req, res) => {
    res.render("index", {pageTitle: "Mini Messanger"})
    // res.send("Homepage send")
})

app.get("/new", () => {
    app.render("new", {pageTitle: "New Message", messages})
})

app.use((err, req, res, next) => {
    res.render("error", { errMsg: err })
    console.log(err)
    console.log(err)
})

app.listen(PORT, () => console.log("Listening on port: ", PORT))