const express = require("express")
const path = require("node:path")
const newRouter = require("./routes/newRouter")
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

app.use(express.urlencoded({extended: true}))
app.use(newRouter)

app.get("/", (req, res) => {
    res.render("index", {pageTitle: "Mini Messenger", messages})
})

app.use((err, req, res, next) => {
    res.status(404).render("error", { errMsg: err })
    console.log(err)
})

app.listen(PORT, () => console.log("Listening on port: ", PORT))