const express = require('express');
const app = express();
const port = 6456;
const fs = require('fs/promises');
const bodyParser = require('body-parser');

//Root route
app.get('/', (req, res) => {
    res.send('Everything is OK');
})

//Return all
app.get('/art', async (req, res) => {
    try{
        //Read the file
        let data = await fs.readFile('data/art.json');
        //Send back the file
        res.status(200).send(JSON.parse(data));
    }catch(error){
        console.log(error)
        res.status(500).send('file could not be read');
    }
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
})