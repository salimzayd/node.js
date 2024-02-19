const app = require('express')();
const port = 4000 

app.listen(port,() =>
    console.log('server is runnig on ',port)
);


app.get('/getRequest' , (req,res) =>{
    res.send("helo this is successfull get request")
});

app.post('/postRequest', (req,res) =>{
    res.send("heloo this successfull post request")
});