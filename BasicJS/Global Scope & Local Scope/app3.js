// Global Scope

var x = 1
let y = 2
const z = 3

console.log(`Global, ${x}`)
console.log(`Global, ${y}`)
console.log(`Global, ${z}`)

// Local Scope

function myFunc() {
  var x = 10
  const z = 5
  console.log(`Function, ${x}`) // Function Scope
  console.log(`Function, ${y}`)
  console.log(`Function, ${z}`)

  {
    var x = 12
    const z = 6
    console.log(`Block, ${x}`) //  Block Scope
    console.log(`Block, ${y}`)
    console.log(`Block, ${z}`)
  }
}

myFunc()

console.log('* * * * * * * * * *')
console.log('* * * * * * * * * *')
console.log('* * * * * * * * * *')

