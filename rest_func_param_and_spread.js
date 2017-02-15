//IN ES6 we can add defualt parameters to function it was not allowed in ES5. 

//Example :

function logDefaultParams( money = 1000 ) {
	console.log(money);
}

logDefaultParams();
logDefaultParams(2000);


//Spread Operator 
//IN ES5 if we want to use array as an argument to function you would have to use apply function.
//Example :
//function request(url, options, callback) {
//............
//}
//var requestArgs = ['https://node.com',2,3,4]
//request.apply(null, requestArgs);

//IN ES6 we can do same with Spread Operator [...]
//Example :
//function request(url, options, callback) {
//............
//}
//var requestArgs = ['https://node.com',2,3,4]
//request.apply(...requestArgs); 


//Example 2 Spread Operator

var first = ['B','C','D'];
var second = ['A','E','F','G'];

//We want to insert B & C After A. So in ES5 we have to iterate the array to insert values.
var new_second = ['A',...first,'E','F','G'];
console.log(new_second);

//Rest Operator it look like same as spread.It help to iterate your object without converting object to array or some special logic.
//Example without REST Operator
//var store = function(category) {
//  var items = [].slice.call(arguments, 1);
//  console.log(arguments);
//  arguments.forEach(function (item) {
//	console.log(item);
//  });
//};


//Example with REST Operator
var store = function(...category) {
  console.log(category);
  category.forEach(function (item) {
      console.log(item);
  });
};

store();
store("FIRE","HEY","RUN");
store('fruit', 'apple','D','E');
