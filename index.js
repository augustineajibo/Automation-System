const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8002;
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})
app.get('/recipe.js', function (req, res) {
    res.sendFile('recipe.js', {root: __dirname});
})

app.get('/recipes', function (req, res) {
    console.log("received a recipes request")
    fs.readdir("backup_file", (err, files) => {
        if (err) {
            console.log(err)
            res.send("An error ocurred.")
        } else {
            // if (path.extname(file) == ".csv")
            console.log("processed the recipes request")
            res.send(JSON.stringify(
                files.filter(file => path.extname(file) == ".csv")
            ))
        }
    })
})
app.post('/', function(req,res,next){

    const {Ref_recipe,Ref_name,Editor_name,Mode } = req.body;

    res.send(req.body)
    res.status(200).send("Data sent sucessfuly");

});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

