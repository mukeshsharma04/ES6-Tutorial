//So Here we will learn about let keyword. Why use "let" and what is wrong with "var".

//What is wrong with var ?
//So when we define var we are not clear where we can use this variable inside a function or in if statement or can we use it outside the if statement? so it is a bit of confusion.
//We cannot control value scope by curly braces. 

  function testVar(rich) {
	var money = 0;

	if(rich) {
	 var money = 100;
	 console.log("Testing VAR First Condition I have " + money + " Rupees");
	}

	{
	 var money = 1000;
         console.log("Testing VAR Second Condition I have " + money + " Rupees");

	 {
	  var money = 10000
          console.log("Testing VAR Third Condition I have " + money + " Rupees");

	 }

	}
         console.log("Testing VAR Before Returning from function I have " + money + " Rupees");

	return money;
  }
 console.log("Testing VAR at execution : I have "+testVar(true)+" Rupees");

// Why Use Let ?
// In ES6 We can control value scope by curly braces if we use let. it will not change its value.It always picks values from its nearby scope or its internal scope so as scope is getting change here values are getting change but when we returning value from function it will pick its local scope means the intialized money varible which is 0.
 function testLet(rich) {
        let money = 0;// Here we can use var also we can mix let and var.

        if(rich) {
         let money = 100 
         console.log("\nTesting LET In First Condition : " + money + " Rupees");
        }

        {
         let money = 1000 
         console.log("Testing LET In Second Condition : " + money + " Rupees");
            {
              let money = 10000 
              console.log("Testing LET In Third Condition : " + money + " Rupees");
            } 
        }

        console.log("Testing LET Before Returning from function  : " + money + " Rupees");
        return money;
}

console.log("Testing LET At Execution : I have "+testLet(true)+" Rupees");


//When it comes to const, things are easier; it just prevent re-assigning, and it's also block-scoped like let.
 function testConst(rich) {
        const money = 0;

        if(rich) {
        const money = 100
         console.log("\nTesting CONST In First Condition : " + money + " Rupees");
        }

        {
         const money = 1000
         console.log("Testing CONST In Second Condition : " + money + " Rupees");
            {
              const money = 10000
              console.log("Testing CONST In Third Condition : " + money + " Rupees");
            }
        }

        console.log("Testing CONST Before Returning from function  : " + money + " Rupees");
        return money;
}

console.log("Testing CONST At Execution : I have "+testConst(true)+" Rupees");

//Diiference between let and cost is you cannot reassign const but you can reassign let. Here it will throw error when we reassign const :
 function testConstAndLet(rich) {
        let money = 0;
	//let money = 1; Redeclare through error
        // money = 2; Reassign will not throw any error
         console.log("\nTesting LEt Declare Condition : " + money + " Rupees");

        if(rich) {
        money = 100
         console.log("Testing LET Reassign In First Condition : " + money + " Rupees");
        }

        {
         const money = 1000;
         //const money = 1222; //Redeclare will throw error.
          money = 10; //Re assign also throw Error
         console.log("Throw Error Because We Reassigning Const Here");
        }

        console.log("Testing Returning from function  : " + money + " Rupees");
        return money;
}

console.log("Testing At Execution : I have "+testConstAndLet(true)+" Rupees");



//» const for modules, classes, functions
//» let for all mutable variable where you used to write var
//» var is still okay, it won't break
