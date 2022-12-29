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



document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }


  // Optional - Used for spinners/loaders
  // xhr.onprogress = function () {
  //   console.log('READYSTATE', xhr.readyState);
  // }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();

}


// Server Response Properties
// Property	Description
// responseText	get the response data as a string
// responseXML get the response data as XML data


// Server Response Methods
// Method	Description
// getResponseHeader()	Returns specific header information from the server resource
// getAllResponseHeaders()	Returns all the header information from the server resource