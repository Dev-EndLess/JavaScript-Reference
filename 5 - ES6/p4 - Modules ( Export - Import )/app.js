//* * * IMPORT * * *//

// import in curly brackets if is not default export
import User, { printName, printAge } from './app2.js'

const user = new User('Bob', 11)
printName(user)
printAge(user)
console.log(user)