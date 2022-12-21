// * * * Primitive * * * //

const myAge = 10

function incrementaAnni(age) {
  age = age + 1
}

incrementaAnni(myAge)
console.log(myAge) // 10

// 10 e un Primitive
// In questo modo passiamo il valore 10 e non la varibile


// * * * Reference * * * //

const myAge2 = 
{
  age: 10
}

function incrementaAnni2(num) {
  num.age = num.age + 5
}

incrementaAnni2(myAge2)
console.log(myAge2) // 15

// Ora passo un Object
// In questo modo il valore incrementa

console.log('- - - - - - - - - -')
