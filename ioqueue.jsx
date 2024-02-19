// experiment 13
setTimeout(() => console.log("this is settimeout 1"),0);
setImmediate(() => console.log("this is setimmediate 1"));





// experiment 12

// setImmediate(() => console.log("this is setimmediate 1"));
// setImmediate(() =>{
//     console.log("this is setimmediate 2");
//     process.nextTick(() =>console.log("this process.nexttick 1"));;
//     Promise.resolve().then(() => console.log("this promise.resolve 1"));
// });
// setImmediate(() => console.log("this is setimmediate 3"));


// experiment 8
// const fs = require("fs");

// fs.readFile(__filename,() =>{
//     console.log("this is readfile 1");
// setImmediate(() => console.log("this is inner setimmediate inside readfile "));
// process.nextTick(() => console.log("this is process.nexttick inside readfile")
// );
// Promise.resolve().then(() => console.log("this is inner promise.resolve inside readfile"))

// });


// process.nextTick(() => console.log("this is process.nexttick 1"));
// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// setTimeout(() => console.log("this is settimeout 1 "),0);

// for (let i=0; i < 200000000;i++){} 


//experiment 7
// const fs = require("fs");

// setTimeout(() => console.log("this is settimeout 1 "), 0);
// fs.readFile(__filename,() =>{
//     console.log(" this is readfile 1")
// });


// experiment 6
// const fs = require("fs");

// fs.readFile(__filename,() =>{
//     console.log("this is readfile 1");
// });

// process.nextTick(() => console.log("this is process.nexttick 1"));
// Promise.resolve().then(() => console.log("this promise.resolve 1"));