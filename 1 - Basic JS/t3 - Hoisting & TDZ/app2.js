console.log('* * * * * * * * * *')
/* * * HOISTING * * */

// Per hoisting si intende che JavaScript dà maggiore precedenza alla dichiarazione di variabili, classi e funzioni 
// durante l'esecuzione di un programma.
// Hoisting consiste nell'effettuare il processo delle dichiarazioni del computer prima di qualsiasi altro codice.


{
  // Declare variable
  let bestFood = "Pizza";

  // Declare another variable
  let myBestMeal = () => {
    console.log(bestFood);
    let bestFood = "Riso saltato con verdure";
  };

  // Invoke function
  myBestMeal();
}

// return
"Uncaught ReferenceError: Cannot access 'bestFood' before initialization"



// let bestFood // 1. JavaScript ha analizzato la prima dichiarazione di bestFood

let myBestMeal // 2. il computer ha analizzato la dichiarazione della variabile myBestMeal

bestFood = "Pizza"; // 3. il computer ha inizializzato la variabile bestFood

myBestMeal = () => {
  console.log(bestFood);
  let bestFood = "Riso saltato con verdure";
}; // 4. JavaScript inizializza la variabile myBestMeal

myBestMeal(); // 5. il computer ha richiamato la funzione myBestMeal

let bestFood // 6. JavaScript ha analizzato la dichiarazione di bestFood della funzione

console.log(bestFood); // 7. il computer ha analizzato l'istruzione console.log della funzione

// Uncaught ReferenceError // L'invocazione di bestFood ha restituito un errore

console.log('* * * * * * * * * *')