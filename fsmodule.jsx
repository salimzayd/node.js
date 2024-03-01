const fs = require("node:fs");


//  console.log("first")

//  // synchronous ayi file read cheyyal
// const filecontents = fs.readFileSync("./file.txt", "utf-8")
// console.log(filecontents)

//  console.log("second")
//  // asynchronous ayi file read cheyyal
// fs.readFile("./file.txt" ,"utf-8", (error,data) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
// console.log("third")


// // synchronous ayi file create cheyyal
// fs.writeFileSync("./greet.txt" , "helo world! ");


// // asynchronous ayi file create cheyyal
// fs.writeFile("./greet.txt" , " helo sai",{flag :"a"} , (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file written")
//     }
// })


//file creating

fs.writeFile("./helloworld.txt","halo dears ", {flag:"a"},(err) =>{
    if(err){
        console.log(err)    
    }else{
        console.log("created")
    }
})

// unlink or delete

// fs.unlink("./helloworld.txt",(err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleted successfully ");
//     }
// })