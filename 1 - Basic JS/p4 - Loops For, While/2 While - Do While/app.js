//* * * WHILE * * *//

// Il ciclo viene eseguito fino a che la condizione e vera.
// Quando il ciclo diventa false, il loop si arresta

let n = 0;

while (n < 5) {
  n++;
  
  if (n == 3) continue // skip and continue the loop
  console.log("n = " + n) // 1 2 4 5 
}

//--------------------------------------------------------------//

let m = 0;

while (m < 5) {
  m++;
  
  if (m == 3) break // break the loop
  console.log("m = " + m) // 1 2
}


//* * * DO WHILE * * *//

// Il ciclo do viene eseguito 1 volta anche se la condizione di while e falsa

let i = 0

do {
  i++;
  console.log("i = " + i)
} while (i < 5)
