// L'istruzione console.log ha restituito correttamente un valore ( undefined)
// perché JavaScript assegna automaticamente undefined a una variabile var sollevata (hoisted).
// In altre parole, quando il computer solleva una variabile var, la inizializza automaticamente con il valore undefined.
// Al contrario, JavaScript non inizializza una variabile let (o const) con alcun valore ogni volta che la solleva. 
// Quindi, la variabile rimane morta e inaccessibile.


//* * * TDZ with Let * * *//


// RETURN Reference Error with let and const

{
  // TDZ start here

  // TDZ continue...
  console.log('bestFood') // ReferenceError, bestFood TDZ continue...
  // TDZ continue...
  let bestFood = 'Riso saltato con verdure' // bestFood TDZ end here

  // TDZ dont exist here
}



{
  // TDZ start here
  // TDZ continue...

  let bestFood = 'Riso saltato con verdure' // bestFood TDZ end here
  console.log(bestFood) // return "Riso saltato con verdure" TDZ dont exist here

  // TDZ dont exist here
}



{
  // TDZ start here
  // TDZ continue...
  let bestFood; //  bestFood TDZ ends here
  console.log(bestFood); // is undefined // bestFood TDZ dont exist here
  bestFood = "Riso saltato con verdure"; // TDZ dont exist here
  console.log(bestFood); // return "Riso saltato con verdure" TDZ dont exist here
}




// RETURN UNDEFINED with var

{
  // la TDZ di bestFood inizia e finisce qui
  console.log(bestFood); // return undefined // bestFood TDZ dont exist here
  var bestFood = "Riso saltato con verdure"; // bestFood TDZ dont exist here
  console.log(bestFood); // return "Riso saltato con verdure" TDZ dont exist here
  // TDZ dont exist here
}


