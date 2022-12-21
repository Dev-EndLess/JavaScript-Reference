//* * * FUNCTION DECLARATIONS * * *//

// syntax

function Sommare (valore1 , valore2) {
  console.log(valore1 + valore2);
}

Sommare(2,2)
Sommare(5,5)



function Saluto(nome = 'Utente', fullNickName = 'non Assegnato') {
  return `Ciao ${nome}. Il tuo nickname e ${fullNickName}?`;
}

console.log(Saluto())
console.log(Saluto('Fabri', 'EndLess', ))
