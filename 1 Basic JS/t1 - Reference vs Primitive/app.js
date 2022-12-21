// * * * Primitive * * * //

const num1 = 1
const num2 = 1

console.log(num1 === num2)   // true



const num10 = [1]
const num20 = [1]

console.log(num10 === num20)   // false


// * * * Reference * * * //

const a = {}
const b = {}


const x = { skill: 'Jump' }
const y = { skill: 'Jump' }

x === y    // false

// Sono le skill di 2 persone diverse ( Oggetti Diversi)
// Uno potrebbe essere Player1 e un altro Player2

const vecchio = {
  name: 'endless'
}

const nuovo = {
  name: 'endless'
}

vecchio === nuovo     // false

// Sono 2 oggetti differenti in memoria

console.log('- - - - - - - - - -')