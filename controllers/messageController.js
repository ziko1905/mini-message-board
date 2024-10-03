const asyncHandler = require('express-async-handler')

const getAllMessages = asyncHandler((req, res, next, messages) => {
    res.render("new", {pageTitle: "Messages", messages})
})

module.exports = {getAllMessages}