//Ierators are those which expose a next() method when it invoked it return a value and a done property
	var mySet = new Set(['a','b','c']),
	    items = mySet.entries();

	console.log(items.next());

 	let myMap = new Map([['a',1],['b',2]]),
	    mapItems = myMap.entries();


	console.log(mapItems.next());
	console.log(mapItems.next());
	console.log(mapItems.next());
	
	let setValues = mySet.values(),
	    mapValues = myMap.values();

	console.log(setValues.next());
	console.log(mapValues.next());

	//Sets don't have any keys method
	let mapKeys = myMap.keys();
	console.log(mapKeys.next());
