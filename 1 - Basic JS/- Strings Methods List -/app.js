const stringOne = ' freeCodeCamp! '
const stringTwo = 'frontend & backend'

// charat()
console.log(stringOne.charAt(4)) // return "r"


// concat()
console.log(stringOne.concat(stringTwo)) // return freeCodeCampfrontEnd and backEnd


// endsWith()
console.log(stringOne.endsWith('Camp')) // return true or false


// starsWith()
console.log(stringOne.startsWith('free')) // return true or false


// includes()
console.log(stringTwo.includes('&')) // return true or false


// indexOf()
console.log(stringTwo.indexOf('end')) // return 5 front*end*


// lastIndexOf()
console.log(stringTwo.lastIndexOf('end')) // return 15 back*end*


// match()
console.log(stringOne.match(/r/g)) // return r  (regEx)


// repeat()
console.log(stringOne.repeat(3)) // return x3 times


// replace()
console.log(stringTwo.replace('backend, frontend')) // regEx


// search()
console.log(stringTwo.search(/backend/g)) // return 11  (regEx)


// splice() // substring() // start at index 2 and end at 4
console.log(stringTwo.slice(2, 4)) // return on
console.log(stringTwo.substring(2, 4)) // return on


// split()
console.log(stringTwo.split('')) // return 'f', 'r', 'o', etc..etc..
console.log(stringTwo.split(' ')) // return 'frontend', '&', 'backend'


// substr() // start at index 1 and count 4 more char
console.log(stringTwo.substr(1, 4)) // return 'onte'


// toLowerCase
console.log(stringOne.toLowerCase(1, 4))


// toUpperCase
console.log(stringOne.toUpperCase(1, 4))


// trim() // remove extraspace
console.log(stringOne.trim())
console.log(stringOne.trimEnd())
console.log(stringOne.trimStart())

