// * * * Primitive * * * // 

let a = 1
let b = a

console.log(a) // 1
console.log(b) // 1
a = 8
console.log(a) // 8
console.log(b) // 1


// * * * Reference * * * //

let x = { name: 'endless' }
let y = x

// ho fatto la copia dell'oggetto x
console.log(x)  // endless
console.log(y)  // endless

// ho modificato la proprieta dell'oggetto ( Stringa Marcus )
x.name = 'Marcus'
console.log(x)  // Marcus
console.log(y)  // Marcus

// ho modificato l'oggetto x, quindi y rimane Marcus
x = {name: 'Paul'}
console.log(x)  // Paul
console.log(y)  // Marcus

