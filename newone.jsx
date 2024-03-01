// const http = require('http')
// const port = 2603


// const server = http.createServer(function(req,res){
// res.write("hai new server,how are uh")
// res.end()
// })

// server.listen(port,function(error){
//     if(error){
//         console.log("something is wrong in your server");
//     }else{
//         console.log("here is your server start working on port" + " " + port);
//     }
// })


const express = require('express')
const app = express()
const port = 2003

app.get("/",(req,res) =>{
    res.send("hai there express server")
})

app.listen(port,function(error){
    if(error){
        console.log("oops something wrong again");
    }else{
        console.log("there u goo ,ur server is listening in port :" + port);
    }
})
