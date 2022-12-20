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

  {
    var x = 12 // Function Scope ( cause var )
    const z = 6
    console.log(`Block, ${x}`) //  Block Scope
    console.log(`Block, ${y}`)
    console.log(`Block, ${z}`)
  }

  console.log(`Function, ${x}`)
  console.log(`Function, ${y}`)
  console.log(`Function, ${z}`)

}

myFunc()


