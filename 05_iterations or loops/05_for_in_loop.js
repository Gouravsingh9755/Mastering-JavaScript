//------------------------------- 🔴 for in loop 🔴 ---------------------------------------


// Certainly! In JavaScript, the `for...in` loop is used to iterate over the enumerable 
// properties of an "" object  "".🔍🔍🔍

// It's commonly used with objects, but it can also be used with 
// arrays to iterate over their indices. or to get their  index values 🔍🔍🔍


// Here's a basic syntax: 👇👇👇

// for (variable in object) {
//   // code to be executed
// }


//1️⃣ - `variable`: A variable that will be assigned the property name on each iteration.
//2️⃣ - `object`: The object whose properties you want to iterate over.


// For example, let's say you have an object `myObject`: 👇👇👇

// let myObject = {
//   name: 'John',
//   age: 25,
//   city: 'New York'
// };


// You can use a `for...in` loop to iterate over its properties:🔍🔍🔍

// for (let key in myObject) {
//   console.log(key + ': ' + myObject[key]);
// }

// This would output:👇👇👇

// name: John
// age: 25
// city: New York


//🔴 points to remember 👇👇👇

//❗❗ It's worth noting that `for...in` is not recommended for iterating over arrays due to 
// potential issues with unexpected behavior. For arrays, it's better to use the `for...of`
//  loop or array methods like `forEach`.👈👈👈✅

// Keep in mind that `for...in` iterates over all enumerable properties, including those inherited from the object's prototype chain. If you only want to iterate over an object's own properties (not inherited ones), you can use `hasOwnProperty`:👇👇👇


// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//     console.log(key + ': ' + myObject[key]);
//   }
// }

// for example👇👇👇

//Examples to access keys from object 👇👇👇  


// 1️⃣const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb : "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject ) {
//     console.log(key);
//     }
//   👉👉 output=>
// js
// cpp
// rb
// swift

//Examples to access values from object 👇👇👇  


// 2️⃣for (const key in myObject ) {
//     console.log(myObject[key]);
//     }
    //👉 output=> javascript
    // C++
    // ruby
    // swift by apple


//Examples to access values in key:value pair from object 👇👇👇  


    // 3️⃣for (const key in myObject ) {
    //     console.log(`${key} sortcyt is for ${myObject[key]}`);
    //     }

        // 👉output=>
        // js sortcyt is for javascript
        // cpp sortcyt is for C++
        // rb sortcyt is for ruby
        // swift sortcyt is for swift by apple



//Example with array👇👇👇  

    //    4️⃣const programming = ["js", "java", "py", "C", "C++"]
    //    for (const key in programming) {
    //     console.log(key)
    //         }
    //👉 output=>
    // 0
    // 1
    // 2
    // 3
    // 4

    // 🛑⭕🛑note = By-default array keys are 0,1,2,3,4
    //       but in object we can provide key by our own choise


//Examples to access keys from object 👇👇👇  


//    5️⃣ const programming = ["js", "java", "py", "C", "C++"]
//        for (const key in programming) {
//         console.log( programming[key])
//             }
// 👉 output=>
// js
// java
// py
// C
// C++

//Example with map 👇👇👇  

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// for (const key in map) {
//     console.log(key);
// }

// map are not iterable we cant apply loops on map ❌❌❌ 🔍🔍





