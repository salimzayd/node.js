const EventEmitter = require('events')

const neemitter = new EventEmitter();

// neemitter.on("calling",(no,place)=>{
//     console.log(`there is call into ${no} from ${place}`)
// })


neemitter.on("calling",(no,place)=>{
    if(no === "101"){
        console.log(`the police need  reach immediately to ${place}`)
    }else if (no === "100") {
        console.log(`the ambulance need to reach ${place} immediately`)
        
    }else if (no === "104"){
        console.log(` the fire rescue team need to reach ${place} immediately`)
    }
})

neemitter.emit("calling" , "101","miami");
neemitter.emit("calling","100","california");
neemitter.emit("calling","104","kochi")