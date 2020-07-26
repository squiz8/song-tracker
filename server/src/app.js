const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(cors());



app.post('/register', (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    if(email || password){
        res.status(200).json({
            details:{
                email,
                password
            }
        })
    }else{
        res.status(404);
    }
})

const port = process.env.PORT || 8081;
app.listen(port, ()=>{
    console.log("listening to port " + port);
});