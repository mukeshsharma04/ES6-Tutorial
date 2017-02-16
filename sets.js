// Refrence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//The Set object lets you store unique values of any type, whether primitive(string, number, boolean, null, undefined, symbol) values or object references
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('text');
var o = {a : 1, b : 2};
mySet.add(o);
mySet.add({a : 1, b : 2}); // Because o is refrencing a different object so its ok to add again

var check = mySet.has(1);
console.log(mySet);
mySet.delete(5);
var checkRef = mySet.has(5);
console.log(checkRef);
console.log(mySet);
console.log(check);

//for (let item of mySet) console.log(item);
//Iteration operations in SET 
//for (let item of mySet.keys()) console.log(item);
//for (let item of mySet.values()) console.log(item);
//for (let [key, value] of mySet.entries()) console.log(key + value);
//var myArr = Array.from(mySet);


//WeakSets : weaksets garbage collect object after deleting them but they have fix apis
// add,has,delete
