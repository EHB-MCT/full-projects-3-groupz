const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
require('dotenv').config()
const fs = require("fs/promises");
const bodyParser = require("body-parser");

//Create the client
const client = new MongoClient(process.env.FINAL_URL);
const port = process.env.port || 6456

let users = [];

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());

//testMongo
app.get("/testMongo", async(req,res) => {
  try{
    //connect to the db
    await client.connect();

    //retrieve the users collection data
    const colli = client.db('kunst').collection('users')
    const users = await colli.find({}).toArray();
    

    //Send back the file
    res.status(200).send(users);
  }catch(error){
    res.status(500).send({
      error: 'Something went wrong',
      value: error
    });
  }finally {
    await client.close();
  }
})

//Root route
app.get("/", (req, res) => {
  res.send("Everything is OK");
});

//Return all
app.get("/art", async (req, res) => {
  try {
    //connect to the db
    await client.connect();

    //retrieve the art collection data
    const colli = client.db("kunst").collection("art collection");
    const arts = await colli.find({}).toArray();

    //Send back the data with the response
    res.status(200).send(arts);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Something went wrong",
      value: error,
    });
  }
});

//Sign up
app.post("/signup", async (req, res) => {
  //Check fo empty fields
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(401).send({
      status: "Bad Request",
      message: "Some fields are missing"
    });
  }

  try{
    //connect to the db
    await client.connect();

    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    //retrieve the users collection data
    const colli = client.db('kunst').collection('users');
    const insertedUser = await colli.insertOne(user)

    //Send back response when user is saved
    res.status(201).send({
      status: "Saved",
      message: "Users has been saved",
      data: insertedUser
    });
  }catch(error){
    console.log(error)
    res.status(500).send({
      error: 'Somthing went wrong!',
      value: error
    });
  }finally {
    await client.close();
  }
});

//Login
app.post("/login", async (req,res) => {

  //Check for empty fields
  if(!req.body.email || !req.body.password){
      res.status(401).send({
          status: "Bad Request",
          message: "Some fields are missing: email, password"
      })
  }

  try{
    //connect to the db
    await client.connect();

    const loginuser = {
      email: req.body.email,
      password: req.body.password
    }
    //retrieve the users collection data
    const colli = client.db('kunst').collection('users');
    const query = {email: loginuser.email}
    const user = await colli.findOne(query)

    if(user){
      //compare passwords
      if(user.password == loginuser.password){
        res.status(200).send({
          status: "Authentication succesfull!",
          message: "You are logged in!"
        })
      }else{
        //Password is incorrect
        res.status(401).send({
          status: "Authentication error",
          message: "Password is incorrect!"
        })
      }
    }else{
        //No user found: send back error
        res.status(401).send({
            status: "Authentication error",
            message: "No user with this email has been found, register first."
        })
    }
  }catch(error){
    console.log(error)
    res.status(500).send({
      error: 'Somthing went wrong!',
      value: error
    });
  }finally {
    await client.close();
  }
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
