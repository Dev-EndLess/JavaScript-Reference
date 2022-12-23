// // IMMEDIATLEY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(){
  console.log('IIFEs work?');
})();



// // IMMEDIATLEY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(vs){
  console.log(`Ciao, ti va un ${vs}`)
})('versus a Killer Instict');



// // PROPERTY METHODS

const todo = {
  add:function() {
    console.log('Vado a fare un giretto')
  },
  edit: function(bici) {
    console.log(`Vado a fare un giretto ${bici}`)
  }
}

todo.add()
todo.edit('con la bici')
