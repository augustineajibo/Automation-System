function GetFileListing() {
    var url = 'http://localhost:5002/recipes'

    fetch(url)
    .then(function(response) {
        console.log("hey");
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        const dropdownElement = document.getElementById("Ref_recipe");
        data.forEach(function (option, i) {
            dropdownElement.add(new Option(option, option));
        });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

}

