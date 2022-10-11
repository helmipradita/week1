import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let users = data;
    users.map(function(users) {
        let names = users.name
        console.log(names)
    });
  })
  .catch(err => console.log(err))