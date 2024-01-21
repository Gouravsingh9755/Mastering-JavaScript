// +++++++++++++++++++  🔴 Defination of function 🔴+++++++++++++++++++++++++++++++++++++

// In JavaScript, functions are blocks of reusable code that can be defined and called to 
// perform a specific task. Functions allow you to organize your code into logical units,
//  making it easier to understand, maintain, and reuse. Here's the basic syntax for defining
// functions in JavaScript: 👆👆👆

// 3️⃣ Types of function creation....🔍🔍🔍  


// Function declaration
function functionName(parameters) {
    // code to be executed
  }
  
  // Function expression
  const functionName = function(parameters) {
    // code to be executed
  };
  
  // Arrow function (ES6+)
  const functionName = (parameters) => {
    // code to be executed
  };
  
//   Let's understand each part: 👇👇👇👇



// 1️⃣ Function Declaration:   👈👈👈

    function functionName(parameters) {
        // code to be executed
    }
  
// 👆 function: The keyword used to declare a function.

// 👆 functionName: The name of the function, which you can use to call the function later.

// 👆 parameters: Input values that the function can accept. They are optional, and you
//                can have multiple parameters separated by commas. ❗❗❗❗🔍

// 👆 {}: The curly braces contain the body of the function, where you place the code to be 
//        executed when the function is called.




//  2️⃣ Function Expression:            👈👈👈

     const functionName = function(parameters) {
              // code to be executed
      };

  
//   👆  const functionName: The function is assigned to a variable. This is known as a
//                           function expression.

//   👆  The rest of the syntax is similar to the function declaration.



// 3️⃣ Arrow Function or Fat Arrow Function (ES6+):  () => {}   👈👈👈

      const functionName = (parameters) => {
             // code to be executed
      };


// 👆  Introduced in ECMAScript 2015 (ES6), arrow functions provide a more concise syntax.

// 👆  (parameters) =>: The arrow function syntax. If there's only one parameter, you can 
//                      omit the parentheses.

//     omit meaning :   👆 "Omit" means to leave something out or skip it. 🔍🔍🔍

// 👆  {} : The curly braces contain the body of the function, similar to other function 
//          types.


//+++++++++++++++++++++++  How to call a function ❓❓❓  ++++++++++++++++++++++++++++++


// To call a function, you have to use its name followed by parentheses and provide any 
// required arguments:

// for example 👇👇👇

// Calling a function

functionName(argument1, argument2);


// JavaScript functions can give back results using the "return" 👈   keyword. 🔍🔍🔍

//  Sometimes, they can  also be used with " new " 👈 to create objects,
//  but that's not so common.


// examples of different functions 


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
