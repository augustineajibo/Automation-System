function GetFileListing() {
    var url = 'http://localhost:8002/recipes'

    fetch(url)
    .then(function(response) {
        console.log("hey");
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        const dropdownElement = document.getElementById("Sample_type");
        data.forEach(function (option, i) {
            dropdownElement.add(new Option(option, option));
        });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

}
function readCSV(){
const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("./preset.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })

}

