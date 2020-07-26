const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(cors());


require('./routes')(app);
sequelize.sync()
    .then(()=>{
        app.listen(config.port, ()=>{
            console.log("listening to port " + config.port);
        });
    })