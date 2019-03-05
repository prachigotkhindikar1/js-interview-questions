// Code for demonstration of Execution Call Stack and how scope works 

function first() {
  	var name = 'Prateek'
    console.log(name)
}

function second() {
 	var name = 'Node'
    console.log(name) 
}

console.log(name)
var name = 'Tyler' 
first() 
second() 
console.log(name) 

//Another Question 
//What if the javascript variable does not exists in the current execution context.Will Javascript engine stop looking for that variable ? 

//No, Javascript Engine will look for that variable in the closest parent execution context to see if that has that variable.If it is there in that context, it will use that variable in the current execution context. 

var name = 'Prateek' 
function logName() {
  	//Here logName does not have name 
  //defined so it will look for its  
  //closest parent execution context 
  //to see if name is defined there 
  //and here we have one so it logs 
  //onto the screen
  
  //This function says I don't have name but my parent execution context(the one above me) does have name, I will use that name variable 
 	console.log(name)
}

//Invoke the logName method creates a new execution context and pushes it to the call stack

logName()


var count = 0;

function makeAdder(x) { 
	//Inside the makeAdder function 
  //we create another function called 
  //inner which is returned from this function 
  //INNER FUNCTION WILL CREATE A CLOSURE OVER THE OUTER'S FUNCTION'S EXECUTION CONTEXT 
  return function inner(y) { 
    	//This needs to have access to the same variable environment 
    
    //Inner has a local variable y in its variable environment
    //We need to know that whether the inner has a variable x in its variable environment.It does not. 
//We will look up to the closest parent execution context to see if that variable exists.In the closure scope we see that it has a variable x in its variable environment and then it returns 5+2 which is 7 
     	return x+y;
    }
}

//Invoke makeAdder function creates a new execution context 

var add5 = makeAdder(5);
//add5 is a function that now references the inner function 
//We can invoke it this creates a new execution context.Once its done it gets popped from the stack, then its closest parent execution context gets popped and we get the value of count as 7
count = add5(2);

