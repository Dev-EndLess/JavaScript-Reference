// HOISTING //

// l' Hoisting permette alle funzioni di essere usate prima di essere dichiarate
// Uno dei vantaggi del sollevamento è che ti consente di utilizzare una funzione 
// prima di dichiararla nel tuo codice.

function esterna() {

  return interna()

  function interna() {
  console.log('interval')
  }

  function interna() {
    console.log('interna2')
  }

}

esterna()


function esterna2() {

  return interna()

  var interna = () => {
    console.log('interna2')
  }
  var interna = () => {
    console.log('interval')
  }

}

esterna2()