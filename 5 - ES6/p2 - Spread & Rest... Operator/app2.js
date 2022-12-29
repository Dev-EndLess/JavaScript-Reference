/* * * Spread Operator || Rest Operator * * */

// REST: condense multiple elements into an array

function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element
  })
}

// 2*1 2*2 2*3
let arr = multiply(2, 1, 2, 3) // return 2, 4, 6
console.log(arr)


// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
console.log(myBio("nick", "name", "EndLess", "Web Developer", "Male"))