const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const config = require('../config.json');
const cors = require('cors');

//Create the client to use
const client = new MongoClient(config.finalUrl)

const app = express();
const port = 6456;

app.use(bodyParser.json());
app.use(cors())

//Root route
app.get('/', (req, res) => {
    res.send('Everything is OK');
})

//Return all
app.get('/art', async (req, res) => {
    try{
        //connect to the db
        await client.connect();

        //retrieve the art collection data
        const colli = client.db('kunst').collection('art collection');
        const arts = await colli.find({}).toArray();

        //Send back the data with the response
        res.status(200).send(arts);
    }catch(error){
        console.log(error)
        res.status(500).send({
           error: 'Something went wrong',
           value: error 
        });
    }
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
})