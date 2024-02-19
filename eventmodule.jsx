const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("order-pizza", (size,topping) => {
    console.log(`order recieved ! baking a ${size} pizza with ${topping}`)
});

// emitter.on("order-pizza" ,(size) =>{
//     if(size === "large"){
//         console.log("serving complimentart drinks")
//     }else{
//         console.log("sorry! there is no complimentary in this order")
//     }
// })

// console.log("do work before event occurs in the system")
emitter.emit("order-pizza","large","cheese");