// Global Scope

var x = 1 
let y = 2
const z = 3


// Local Scope

{
  let y = 4 // Block scope
  console.log(y) // 4
}


// Local Scope

function myFunc() {
  const z = 5 // Function scope
  console.log(z)
}

myFunc()

console.log(y) // 2
console.log(z) // Reference Error if comment z in global scope

console.log('* * * * * * * * * *')