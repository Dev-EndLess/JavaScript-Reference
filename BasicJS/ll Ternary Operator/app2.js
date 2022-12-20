// TERNARY OPERATOR //

// The ternary operator is a simplified conditional operator like if / else.
// Syntax: condition 
// ? <expression if true> 
// : <expression if false>

let pizza = "eat Pizza"
let isShopClosed = false
let shopAccess = isShopClosed
  ? 'I CANT eat Pizza'
  : pizza
  ? `Yes, I can ${pizza} today`
  : 'Damn, no Pizza Today'

console.log(shopAccess)
console.log('* * * * * * * * * *')


//-----------------------------------------------------------------//

let testScore = 79
let myGrade = testScore > 89 ? 'A'
  : testScore > 79 ? 'B'
  : testScore > 69 ? 'C'
  : testScore > 59 ? 'D'
  : 'F'

console.log(`My test grade is ${myGrade}`)
console.log('* * * * * * * * * *')


//-----------------------------------------------------------------//

let player = 'rock'
let cpu = 'scissors'
let result = 
  player === cpu 
  ? 'Draw!'
  : player === 'rock' && cpu === 'scissors'
  ? 'You Win'
  : player === 'paper' && cpu === 'rock'
  ? 'You Win'
  : player === 'scissors' && cpu === 'paper'
  ? 'You Win'
  : 'CPU WIN'

  console.log(result)
