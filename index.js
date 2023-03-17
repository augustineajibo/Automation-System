const express = require('express');
const fs = require('fs');
const path = require('path');
const csvResult = require('./readCSV')

const app = express();
const port = 8002;
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})
app.get('/recipe.js', function (req, res) {
    res.sendFile('recipe.js', {root: __dirname});
})

app.get('/recipes', async function (req, res) {
    try {
    const foundCvsResult = await csvResult.convertCsvToJson()
    return res.status(201).json(foundCvsResult)
    } catch (error) {
        console.trace(error)
        throw new Error("No csv result found", error)
    }
})
app.post('/', function(req,res,next){

    const {Ref_recipe,Ref_name,Editor_name,Mode } = req.body;

    res.send(req.body)
    res.status(200).send("Data sent sucessfuly");

});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

