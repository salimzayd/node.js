const fs = require("fs");

const readablestream = fs.createReadStream(__filename);
readablestream.close();

readablestream.on("close" , () =>{
    console.log("this is from readablestream close event callback");

});

setImmediate(() => console.log("this is setimmediate 1"));
setTimeout(() => console.log("this is settimeout 1"),0);
Promise.resolve().then(() => console.log("this is promise.resolve 1"));
process.nextTick(() => console.log("this is process.nexttick 1"));