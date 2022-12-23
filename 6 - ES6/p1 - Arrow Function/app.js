//* * * Arrow Functions * * *//

//Syntax
(param1, param2) => { statements }
(param1, param2) => expression,
(param1, param2) => { return expression }

(singleParam) => { statements }
singleParam => { statements }

() => { statements }
() => expression,
() => { return expression }

(param1, param2, paramN) => expression 


// NORMAL FUNCTION
var multiply = function(x, y) {
  return x * y;
}; 
 
// ARROW FUNCTION 
var multiply = (x, y) => { return x * y };
// or
var multiply = (x, y) => x*y;

