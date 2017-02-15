//ES6 Added few new properties and methods to numbers.

//Example 

//EPSILON property represents the smallest property value
//The EPSILON property has a value of approximately 2.2204460492503130808472633361816E-16, or 2-52.

x = 0.2;
y = 0.3

equal = (Math.abs(x -y) < Number.EPSILON);
console.log(equal);

console.log(Number.isFinite(equal));
console.log(Number.isFinite(Infinity));
console.log(Number.isInteger(equal));
console.log(Number.isSafeInteger(equal));
console.log(Number.isSafeInteger(Math.pow(2,53)));

console.log(isNaN("test")); //Global Nan Function
console.log(Number.isNaN(equal)); // Locaal Scope NaN work same like global NaN


