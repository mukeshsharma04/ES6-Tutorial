//Refrence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//The map() method creates a new array with the results of calling a provided function on every element in this array.

var numbers = [1,2,3,4];

var roots = numbers.map(function(x) {
	return x * 2;
});

console.log(numbers);
console.log(roots);


// Use map on Strings
var map = Array.prototype.map;
var str = map.call("Hello World", function(x) {
return x.charCodeAt(0);
})

console.log(str);

var str1 = '123456';
var res = map.call(str1, function(x){
	return x;
}).reverse().join('');

console.log(res);
//WeakMaps : Weakmaps are same as maps but key and value are loosely couples in weakmap they can be garbage collected if no refrence exist.
