document.getElementById("button3").addEventListener("click", getJsonAPI);

// Get from external API

function getJsonAPI() {
  fetch("https://api.github.com/users")
    .then(respose => respose.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
