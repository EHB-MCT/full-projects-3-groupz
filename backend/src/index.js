const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const fs = require("fs/promises");
const bodyParser = require("body-parser");
const { v4: uuidv4, validate: uuidValidate } = require("uuid");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

//Create the client
const client = new MongoClient(process.env.FINAL_URL);
const port = process.env.port || 6456;

let users = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//testMongo
app.get("/testMongo", async (req, res) => {
  try {
    //connect to the db
    await client.connect();

    //retrieve the users collection data
    const colli = client.db("kunst").collection("users");
    const users = await colli.find({}).toArray();

    //Send back the file
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      value: error,
    });
  } finally {
    await client.close();
  }
});

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
      message: "Some fields are missing",
    });
    return;
  }
  try {
    //connect to the db
    await client.connect();

    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      uuid: uuidv4(),
    };
    //retrieve the users collection data
    const colli = client.db("kunst").collection("users");
    const insertedUser = await colli.insertOne(user);

    //Send back response when user is saved
    res.status(201).send({
      status: "Saved",
      message: "Users has been saved",
      data: insertedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Somthing went wrong!",
      value: error,
    });
  } finally {
    await client.close();
  }
});

//Login
app.post("/login", async (req, res) => {
  //Check for empty fields
  if (!req.body.email || !req.body.password) {
    res.status(401).send({
      status: "Bad Request",
      message: "Some fields are missing: email, password",
    });
    return;
  }

  try {
    //connect to the db
    await client.connect();

    const loginuser = {
      email: req.body.email,
      password: req.body.password,
    };
    //retrieve the users collection data
    const colli = client.db("kunst").collection("users");
    const query = { email: loginuser.email };
    const user = await colli.findOne(query);

    if (user) {
      //compare passwords
      if (user.password == loginuser.password) {
        res.status(200).send({
          status: "Authentication succesfull!",
          message: "You are logged in!",
          data: {
            username: user.username,
            email: user.email,
            uuid: user.uuid,
          },
        });
      } else {
        //Password is incorrect
        res.status(401).send({
          status: "Authentication error",
          message: "Password is incorrect!",
        });
      }
    } else {
      //No user found: send back error
      res.status(401).send({
        status: "Authentication error",
        message: "No user with this email has been found, register first.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Somthing went wrong!",
      value: error,
    });
  } finally {
    await client.close();
  }
});

//VerifyID
app.post("/verifyID", async (req, res) => {
  //Check for empty & faulty fields
  if (!req.body.uuid) {
    res.status(401).send({
      status: "Bad Request",
      message: "ID is missing",
    });
    return;
  } else {
    if (!uuidValidate(req.body.uuid)) {
      res.status(401).send({
        status: "Bad Request",
        message: "ID is not a valid UUID",
      });
      return;
    }
  }

  try {
    //connect to the db
    await client.connect();

    //retrieve the users collection data
    const colli = client.db("kunst").collection("users");

    const query = { uuid: req.body.uuid };
    const user = await colli.findOne(query);

    if (user) {
      res.status(200).send({
        status: "Verified",
        message: "Your UUID is valid.",
        data: {
          username: user.username,
          email: user.email,
          uuid: user.uuid,
        },
      });
    } else {
      //Password is incorrect
      res.status(401).send({
        status: "Veify error",
        message: "There ae no users with this id ${req.body.uuid}",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Somthing went wrong!",
      value: error,
    });
  } finally {
    await client.close();
  }
});

// OpenAI

const configuration = new Configuration({
  organization: "org-SYT077yz8dUwLLhhxVWHmEGi",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/generateImage", async (req, res) => {
  const description = req.body.description;
  const response = await openai.createImage({
    prompt: description,
    n: 1,
    size: "512x512",
  });

  let imageUrl = response.data.data[0].url;

  console.log(imageUrl);

  res.json({
    imageUrl: imageUrl,
  });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
