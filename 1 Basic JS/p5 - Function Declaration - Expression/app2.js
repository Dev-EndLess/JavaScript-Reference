//* * * FUNCTION EXPRESSION * * *//

// syntax

const num = function(n1, n2) {     
  return n1 + n2
};

console.log(num('Marco ', 'Giovanni'))
console.log(num(5, 5))

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase('eNdLeSS'))
