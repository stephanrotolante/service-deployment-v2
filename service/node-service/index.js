const express = require('express');
const cors = require('cors');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const {
    MONGO_USERNAME,
    MONGO_PASS,
    MONGO_PORT,
    MONGO_HOST
} = process.env

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}`;

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err,client) => {
    app.get('/', (req,res) => {
        if(err){
            res.send({
                message:MONGO_USERNAME
            })
        } else {
            res.send({
                message:'made a connection but hitting /'
            })
        }
    });
    app.get('/root', (req,res) => {
        if(err){
            res.send({
                message:'error'
            })
        } else {
            res.send({
                message:'made a connection but hitting /root'
            })
        }
    });
    
    app.listen(3535, () => console.log("Server is up and running"))
})


