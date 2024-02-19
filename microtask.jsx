
setTimeout(() => console.log("this settimeout 1"),1000);
setTimeout(() => console.log("this is settimeout 2"),5000)
setTimeout(() => console.log("this settimeout 3"),0);




// setTimeout(() => console.log("this is settimeout 1"),0);
// setTimeout(() =>{ 
//     console.log("this is settimeout 2 ");
//     process.nextTick(() => console.log("this is the inner nexttick  inside settimeout"))
// },0);
// setTimeout(() => console.log("this is settimeout 3"),0);



// process.nextTick(() => console.log("this is process.nexttick 1"));
// process.nextTick(() =>{
//     console.log("this is process.nexttick 2");
//     process.nextTick(() => console.log("this is inner nexttick inside nexttick")
//     );   
// });

// process.nextTick(() => console.log("this is process.nexttick 3"));


// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// Promise.resolve().then(() => {
//     console.log("this is promise.resolve 2");
//     process.nextTick(() => console.log("this is inner nexttick inside promise and block")
//     );
// });

// Promise.resolve().then(() => console.log("this is promise.resolve 3"))




// experiment 2 callbacks in nexttick executes first then promise call back

// Promise.resolve().then(() => console.log("this is promise.resolve 1"))
// process.nextTick(() => console.log("this is process.nexttick 1"))


//experiment 1 user written synchronous code gets priority

// console.log('console.log1')
// process.nextTick(() =>{
//     console.log("this is process.nexttick 1")
// })
// console.log("console.log2");