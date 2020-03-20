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

app.get('/', (req,res) => {
    mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err,client) => {
        if(err){
            res.send({
                message:'cannot connect'
            })
        } else {
            res.send({
                message:'made a connection but hitting /'
            })
        }
    });
});

app.get('/root', (req,res) => {
    mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err,client) => {
        if(err){
            res.send({
                message:'cannot connect'
            })
        } else {
            res.send({
                message:'made a connection but hitting /root'
            })
        }
    });
});

app.listen(3535, () => console.log("Server is up and running"))


