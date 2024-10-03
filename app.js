const express = require("express")
const path = require("node:path")
const newRouter = require("./routes/newRouter")
const indexRouter = require("./routes/indexRouter").router
const messageRouter = require("./routes/messageRouter")
const app = express()
const PORT = 3000;

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(indexRouter)
app.use(newRouter)
app.use(messageRouter)

app.use((err, req, res, next) => {
    res.status(404).render("error", { errMsg: err })
    console.log(err)
})

app.listen(PORT, () => console.log("Listening on port: ", PORT))