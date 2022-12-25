//* * * INCLUDES * * *//

// Definition and Usage
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

const names = ['Endless', 'Lyna', 'Ivan', 'Florin', 'Liam']

const result = names.includes('Ivan')
const result02 = names.includes('Patrik')

console.log(result) // return true
console.log(result02) // return false

const ingredients = ['flour', 'salt', 'water', 'tomato', 'cheese']

const preparePizza = ingredients.includes('water')

if (preparePizza) {
  console.log('This pizza taste so Good')
} else {
  console.log(`We need some stuff to make the pizza`)
}