//* * * LOGICAL OPERATOR + Short-Circuit Evaluation* * *//

// Comparison and Logical operators are used to test for true or false

// AND: &&
// OR: ||
// NOT: !

// < <br>
// <= <br>
// > <br>
// >= <br>
// == <br>
// != <br></br>

if (4 > 5 && 5 < 6) {
  console.log('yes')
} else {
  console.log('no')
}
// if the first expression is false
// skip the second expression and return 'no'

//---------------------------------------------------------------


let test = true

let isTrue = () => {
  console.log('Test is True')
};
let isFalse = () => {
  console.log('Test is False')
};

// if test is true, check the second argument
// se test is false, DONT check the second argument
(test && isTrue())  
// ()
// (!test || isFalse())
// (test || isFalse())


//------------------------------------------------------------


function nickName(name) {
  name = name || 'Utente';
  console.log(`Ha Loggato in Partita ${name}`)
}

nickName()
nickName('endless')

// Se passi un parametro alla funzione sara' Vero, quindi viene passato il nickname
// Se il parametro della funzione e vuoto allora sara Falso, quindi la function prendera Utente

console.log('* * * * * * * * * *')