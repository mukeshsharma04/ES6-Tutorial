//ES6 Added new way to iterate with for loop :- for of(to iterate values) for in (to iterate keys)


//Example :
	var arr = ['a','b','c','d','e'];
	for(let val of arr) {
	   console.log("Value" + val);
	}

	for(let key in arr) {
	 console.log("KEY" + key);
	}
	
	//Sets and MAP have only values iterator
	let mySet = new Set();
	 mySet.add('X');	
	 mySet.add('Y'); 
	 mySet.add('Z'); 
	
	for(let val of mySet) {
	 console.log(val);
	}

	let myMap = new Map([['a',1],['b',2],['c',3]]);

	for(let val of myMap) {
	 console.log(" myMAP Values " + val);
	}

	//It will return empty result
        for(let key in myMap) {
         console.log(" myMAP Keys " + key);
        }

