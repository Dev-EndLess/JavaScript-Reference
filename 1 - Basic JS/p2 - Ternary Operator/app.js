// TERNARY OPERATOR //

// The ternary operator is a simplified conditional operator like if / else.
// Syntax: condition ? <expression if true> : <expression if false>

let age = 19

if (age >= 18) {
  console.log('sei un adulto')
} else {
  console.log('sei un bambino')
}

console.log(age >= 18) ? 'sei un adulto' : 'sei un bambino'
console.log((age >= 18) ? 'sei un adulto' : 'sei un bambino')



//--------------------------------------------------------------------



let stop

age > 18 ? (
  console.log('Ok, puoi andare'),
  stop = false
) : (
  console.log('Scusa, sei troppo giovane'),
  stop = true
)



//-----------------------------------------------------------------------



let firstCheck = false
secondCheck = false
access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access Granted'


console.log(access)
console.log('* * * * * * * * * *')



//-----------------------------------------------------------------------------



function checkparam(a, b) {
  return a > b ? 'A e maggiore di B' : 'A e minore di B'
}

console.log(checkparam(2, 1));
console.log(checkparam(100, 2));
console.log(checkparam(20, 30));





function checkEqual(a, b) {
  return a === b ? 'Sono uguali' : 'NON sono uguali'
}

console.log(checkEqual(10, 20));
console.log(checkEqual(10, 10));
console.log(checkEqual(20, 10));

console.log('* * * * * * * * * *')







