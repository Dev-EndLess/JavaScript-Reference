// Promises //

// 1. Create in modo specifico per le Operazioni Async
// 2. Si possono concatenare le operazioni usando `.then`
// 3. Gli eventi sono messi in coda
// 4. Miglior Error Handling grazie al `.catch`
// 5. Avoid Inversion of Control (speriamo di capire cosa voglia dire)


// let response = fetch('https://restcountries.com/v3.1/capital/lima')
// console.log(response)

const flag = document.createElement('img')
document.body.appendChild(flag)

fetch('https://restcountries.com/v3.1/capital/lima')
.then(response => {
  return response.json()
}).then(json => {
  flag.src = json[0].flags.png
  console.log('flag added')  
}).catch(err => {
  console.log('errors:' + err.message)
})

// let response = fetch('https://restcountries.com/v3.1/capital/lima')
// console.log(response)