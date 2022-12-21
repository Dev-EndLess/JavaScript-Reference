// Global Scope

var x = 1 
let y = 2
// const z = 3


// Local Scope

function myFunc() {
  const z = 5 
  console.log(y)

  {
    let y = 4 
    console.log(y)
  }
}

myFunc()

console.log('* * * * * * * * * *')
console.log('* * * * * * * * * *')