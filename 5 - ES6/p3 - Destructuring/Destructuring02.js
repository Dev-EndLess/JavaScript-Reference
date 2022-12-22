/* Destructuring an array or an object means make a smaller one or a variable starting from them*/

// DESTRUCTURING AN ARRAY
const alphabet = ['A', 'B', 'Miao', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

const [a,, c, ...rest] = alphabet;
const [b,,,,, d, ...rest01] = numbers;

console.log(a);
console.log(c);
console.log(b);
console.log(d, d);
console.log(rest);
console.log(rest01);


// Create a new array which contains all the elements of boths arrays 

const newArray = [alphabet, numbers];
const newArray2 = [...alphabet, ...numbers];

console.log(newArray2);
console.log(newArray);
space()



sumAndMultiply = (a, b) => [a+b, a*b, a-b];


// DESTRUCTURING A FUNCTION
const[sum, multiply, sott, division = 'No division'] = sumAndMultiply(10,5);
console.log(sum);
console.log(multiply);
console.log(sott);
console.log(division); 
/*
It logs 'No division' but if we says that the function returns [a+b, a*b, a/b] then it'll log the result of the division 
*/

function space() {
  console.log(' ')
}