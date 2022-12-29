document.getElementById("button2").addEventListener("click", getJson);

// Get local json data

function getJson() {
  fetch("posts.json")
    .then(respose => respose.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err)); 
}
