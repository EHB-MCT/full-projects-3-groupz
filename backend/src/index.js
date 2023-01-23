const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const config = require('../config.json');
const cors = require('cors');

let users = [];

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

//Sign up
app.post("/signup", (req,res) => {
    //Check fo empty fields
    if(!req.body.username || !req.body.email || !req.body.password){
        res.status(401).send({
            status: "Bad Request",
            message: "The Fields are missing"
        })
    }
    //save to user array
    users.push({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    //Send back response when user is saved
    res.send({
        status: "Saved",
        message: "Users has been saved"
    })
})

//Login
app.post("/login", (req,res) => {
    //Check fo empty fields
    if(!req.body.email || !req.body.password){
        res.status(401).send({
            status: "Bad Request",
            message: "The Fields are missing"
        })
    }
    let user = users.find(element => element.email == req.body.email)

    if(user){
        if(user.password == req.body.password){
            res.status(200).send({
                status: "Authentication succes",
                message: "You are logged in!"
            })
        }else{
            res.status(401).send({
                status: "Authentication error",
                message: "Password is incorrect"
            })
        }
    }else{
        //No user found: send back error
        res.status(401).send({
            status: "Authentication error",
            message: "No user with this email has been found"
        })
    }

})

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
})