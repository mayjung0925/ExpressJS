const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

let app = express();

// let dataPath =path.join(__dirname,'./log.json')
// app.use((req,res,next)=>{
//     console.log(req.originalUrl);
//     next();
// })


//middleware to serve files from a folder named public
app.use(express.static(path.join(__dirname,'../public')));


app.use(express.urlencoded({ extended:false }));

//endpoint - respond to the 'post' request 
app.post('/formsubmissions', (req, res)=>{
   
    console.log(req.body.name);
    console.log(req.body.email);
    
    let personData = {
        name : req.body.name,
        email : req.body.email
    }
    
    console.log(personData)
    //save the personData in the JSON file
    fs.appendFileSync(path.join(__dirname,'./log.json'), JSON.stringify(personData));
    //send the message to the route
    res.send('Thank you for submitting your information!')

})


// app.get('/', (req, res)=>{
// res.send('Hello from the web server side')
// });


//listen on port 3000
app.listen(3000);