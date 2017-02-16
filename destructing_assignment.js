//Destructing Assignments

	var [x , y] = ['a','b'];
	console.log(x,y);
	
	let {a, b} = {a: 'c', b : 'd'}; //Curly Braces are for object and they have to match keys to destruct
	console.log(a,b);

	function multiple() {
	 return [
		['a','b','c'],[1,2,3]
	 ];
	}

	let [arr1, arr2] = multiple();
	let arr = multiple();
	console.log(arr1,arr2);
	console.log(arr);

	let [,c] = ["Hello","world"];
	console.log(c);

	let {fname,lname,estatus : {status}} = {
	 fname : "Mukesh",
	 lname : "Sharma",
	 estatus : {
          status : "is working"
	 }
	};


       console.log(fname,lname,status);
