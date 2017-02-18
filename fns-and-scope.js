/*jshint esversion: 6 */
// { "esnext": true }

//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

let isTyler = (name) => {
   if (name === "Tyler") {
      return true;
   }
   return false;
};



//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here



function getName() {
   let name = prompt("Please enter your name");
   return name;
};



//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here


function welcome() {
   var name = getName();
   alert("Welcome, " + name);
};



//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here


   // Parameters -- go between the parenthesis after the function name and act as a functions local place holder. If there are multiple parameters within the parenthesis they must be separated by commas. Used in declaring/setting up the function.
   // Parameters are variables.

   // Arguments -- when invoking/calling the function name outside of the function - arguments are also within parenthesis and separated by commas as well. The values that will be asigned to the parameters upon invocation.
   // Arguments are values
   // Invoking a function is an expression


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here


  /*
   undefined
   null
   NaN
   false
   "" (empty string)
   0 (zero)
 */


 function falsyChecker (item) {
 if (!item){
    console.log(item + " is " + false);
  }
  else {
    console.log(item + " is " + true);
  }
}

falsyChecker(null);              // "null is false"
falsyChecker(0);                 // "0 is false"
falsyChecker('');                // "  is false"
falsyChecker(undefined);         // "undefined is false"
falsyChecker(NaN);               // "NaN is false"
falsyChecker(false);             // "false is false"


falsyChecker(538.1);             // "538.1 is true"
falsyChecker("hello world");     // "hello world is true"
falsyChecker(true);              // "true is true"



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here

  function myName () {
     return "Anton";
 }



//Now save the function definition of myName into a new variable called newMyName

  //Code Here


  var newMyName = myName;



//Now alert the result of invoking newMyName

alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here



let outerFn = () => {
   return () =>  {return "anton"};
};








//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here


var innerFn = outerFn();


innerFn();



//Now invoke innerFn.
