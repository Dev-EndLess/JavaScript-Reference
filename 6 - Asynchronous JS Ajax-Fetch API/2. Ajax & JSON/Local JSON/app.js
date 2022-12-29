// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// Get Data from JSON file

// Load Character

document.getElementById("button1").addEventListener("click", loadCharacter);

function loadCharacter() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "character.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const character = JSON.parse(this.responseText);
      // When receiving data from a web server, the data is always a string.
      // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
      // Convert a JavaScript object into a string with JSON.stringify().
      // responseText: get the response data as a string
      // responseXML: get the response data as XML data

      const output = `
      <ul>
      <li>Race: ${character.race}</li>
      <li>Class: ${character.class}</li>
      <li>lvl: ${character.lvl}</li>
      <li>Clan: ${character.clan}</li>
      <li>Armor: ${character.armor}</li>
      <li>Weapon: ${character.weapon}</li>
      </ul>
      `;

      document.getElementById("character").innerHTML = output;
    }
  };

  xhr.send();
}



// Load Characters

document.getElementById("button2").addEventListener("click", loadCharacters);

function loadCharacters() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "characters.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const characters = JSON.parse(this.responseText);

      let output = "";
      characters.forEach(function (character) {
        output += `
      
      <ul>
      <li>Race: ${character.race}</li>
      <li>Class: ${character.class}</li>
      <li>lvl: ${character.lvl}</li>
      <li>Clan: ${character.clan}</li>
      <li>Armor: ${character.armor}</li>
      <li>Weapon: ${character.weapon}</li>
      <hr>
      </ul>
      `;
      });

      document.getElementById("characters").innerHTML = output;
    }
  };

  xhr.send();
}
