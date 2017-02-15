//ES6 defines new ways to declare strings .
//Examples IN ES5

let name = 'Mukesh';

console.log("Hey " + name + " I am string literal from old school.");

//Example IN ES6

console.log(`Hey ${name} I am string literal from new school`); //Please note we are using Backtick operator here :- ``

let rev_str_param = "Sharma";
	function reverseString(string) {
	 return string.split('').reverse().join('');
	}

console.log(`Hey ${name} I am the ReverseString : MR. ${(reverseString(rev_str_param))} and you can pass function also`);


let descrip = `Hey i am the big description here and i have a 
new line without using something special.
Only use backtick operators`;

console.log(descrip);	

