// https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
// https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp

// The XMLHttpRequest object is used to exchange data with a server
// To send a request to a server, we use the
// open()
// send()
// methods of the XMLHttpRequest object:

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", mostraNazioni);

function mostraNazioni() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v2/regionalbloc/eu", true); // true async // false sync

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("success");
      let nation = JSON.parse(this.response);
      console.log(nation);
      nation.forEach((nation) => {
        const nationName = document.createElement("div");
        const nationFlag = document.createElement("img");
        nationName.innerHTML = nation.name;
        nationFlag.src = nation.flags.png;
        nationName.appendChild(nationFlag);
        document.querySelector(".scatola").appendChild(nationName)
      });
    }
  };

  xhr.send();
}

// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// Convert a JavaScript object into a string with JSON.stringify().
// responseText: get the response data as a string
// responseXML: get the response data as XML data

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
