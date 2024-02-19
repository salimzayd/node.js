const express = require("express")
const router = express.Router()


router.get("/", (req,res) =>{
    res.send({data: "here is your data"})
})

router.post("/",(req,res) =>{
    res.send({data : "user created"})
})

router.put("/",(req,res) =>{
    res.send({data:"user updated"})
})

router.delete("/",(req,res) =>{
    res.send({data:"user deleted"})
})


module.exports = router