// Why Arrow Functions? 
// Arrow function is a way to write anonymous functions which  gives you to write a clear syntex with less keywords.

// Anonymous function in ES5
var f = function(data)  {  return data  }

//Anonymous function in ES6
let f2 = (data) => { return data }


//Drwabacks in ES5
// keyword "this" can change value when create a new function and it give a scope which use to confuse everyone but now in ES6
// you cannot use keyword "that = this OR self = this or _this = this OR .bind(this)" because ES6 Arrow function have its own lexical this and also because of lexical this we cannot use Arrow function as a constructor and we cannot use like  bind() or call() it itself increase verbosity


//Example

 function circleArea(r) {
  var PI = 3.14;
  return PI * r * r;
 }

 console.log("Normal function execution r is : " + circleArea(7));

 let circleArea2 = (r) => {
  const PI = 3.14;
  return PI * r * r;
 }

 console.log("\nFat Arrow function execution r is : " + circleArea2(7));


 let circleArea3 = r => 3.14 * r * r; // if we have single parameter we can write this also.
 console.log("\nFat Arrow function one line  execution r is : " + circleArea3(7));
