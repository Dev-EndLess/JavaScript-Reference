// Users Data

const person1 = {
  name: "Leon Kennedy",
  username: "Leon",
  email: "Leon-Kennedy@gmail.com",
}

const person2 = {
  name: "Jill Valentine",
  username: "Jill",
  email: "Jill-Valentine@gmail.com",
}

const http = new EasyHTTP();

// Get Users

const users = http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));




// Create Post

http.post('https://jsonplaceholder.typicode.com/users', person1)
  .then(data => console.log(data))
  .catch(err => console.log(err))
  



// Update Post

http.put('https://jsonplaceholder.typicode.com/users/2', person2)
  .then(data => console.log(data))
  .catch(err => console.log(err));




// Delete Post

http.delete('https://jsonplaceholder.typicode.com/users/2', person2)
  .then(data => console.log(data))
  .catch(err => console.log(err));