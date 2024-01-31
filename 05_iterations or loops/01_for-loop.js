//-------------------------🔴  for loop  🔴 --------------------------------------------

// Defination :👇👇👇

// In JavaScript, a for loop is a control flow statement that allows you to repeatedly 
// execute a block of code as long as a certain condition is true. 
// The basic syntax of a for loop consists of three parts: 👇👇👇


// for (initialization; condition; iteration) {
//     // code to be executed
//   }
  

//1️⃣ Initialization: Executed before the loop starts. 
//                    It often initializes a counter variable.  🔍🔍🔍

//2️⃣ Condition: Evaluated before each iteration. 
//              If it's true, the loop continues; otherwise, it stops.  🔍🔍🔍

//3️⃣ Iteration: Executed at the end of each iteration. 
//               It typically increments or updates the counter variable.  🔍🔍🔍



// for example 👇👇👇

//1️⃣ for (let i = 1; i <= 5; i++) {
    //     console.log(i);
    //   }
    
    
//👆👆👆 This loop initializes i to 1, continues as long as i is less than or equal to 5,
//       and increments i by 1 after each iteration. 🔍🔍🔍

    


//2️⃣ for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
    
// }


//🔴 please read the execution of code 👇👇👇 🔴

// 1️⃣  In FOR LOOP first of all we have to decalare and initialize a variable after that 
 
// 2️⃣  we have to put condition and the we have to give command for the incriment of code.

// 3️⃣  In the code of for loop the initial value opf index is 0. then it will check the 
// condition and then it will return the code which is written in the scope of for loop and 
// then it comes to the iteration part for the incriment of that particular code. ❗❗❗❗




// Guess which will prints prior the statement "5 is best number" or the value " 5 " ❓❓❓

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);



//code for printing tables from 1 to 10 👇👇👇


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    

//Simple example for printing an array through for loop 👇👇👇  

}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}





//--------------------------------🔴  break and continue 🔴 ------------------------------


// defination:👇👇👇

// In JavaScript, `break` and `continue` are control flow statements that are often used 
// within loops, including `for` loops, to alter the normal execution flow. Here's how they 
// can be used in a `for` loop:

//1️⃣. **`break` statement:**👇

//    - It is used to terminate the loop prematurely when a certain condition is met.
//    - BREAK - will throw you out from the scope of that particular loop from where 
//              you used the BREAK statement. 🔍🔍🔍

//    - Example:👇👇👇

//     for (let i = 0; i < 5; i++) {
//         if (i === 3) {
//             break; // exit the loop when i is 3
//         }
//         console.log(i);
//     }


//     // Output: 0, 1, 2    👈👈👈
   

//2️⃣. **`continue` statement:**👇

//    - It is used to skip the rest of the code inside the loop for the current iteration and
//       move on to the next iteration.

//    - CONTINUE - will give an another chance to the loop to wriiten the next values.
                // of that particular loop and skips that value where you used the Continue 
                // keyword  🔍🔍🔍

//    - Example:👇👇👇


//     for (let i = 0; i < 5; i++) {
//         if (i === 2) {
//             continue; // skip the iteration when i is 2
//         }
//         console.log(i);
//     }


//     // Output: 0, 1, 3, 4  👈👈👈


// In the examples above:👆👆👆

// - In the `break` example, the loop is terminated when `i` is equal to 3.🔍🔍🔍
// - In the `continue` example, the loop skips the iteration when `i` is equal to 2. 🔍🔍🔍

//👆 These statements are not exclusive to `for` loops; they can also be used in other loop types like `while` and `do-while`. 🔍🔍🔍


// more examples of break and continue 👇👇👇


// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }
// //    console.log(`Value of i is ${index}`);
    
// // }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }
