//* * * isArray * * *//

// Definition and Usage
// The isArray() method returns true if an object is an array, otherwise false.

const names = ['endless', 'lyna', 'ivan']
const string = 'Hello Dude'
const number = 22
const number2 = [22]

console.log(Array.isArray(names))
console.log(Array.isArray(string))
console.log(Array.isArray(number))
console.log(Array.isArray(number2))