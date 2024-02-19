const express = require("express")
const app = express()
const port = 3001

const userRouter = require('./routes/user')
const commenrRouter = require('./routes/comments')

app.use('/user',userRouter)
app.use('/comments',commenrRouter)

app.listen(port, () =>{
    console.log("server is running on " + port)
})