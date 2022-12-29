document.getElementById("button1").addEventListener("click", getText);

// Get local text file data

function getText() {
  fetch("test.txt")
    .then((respose) => respose.text())
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}
