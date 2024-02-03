//------------------------------- 🔴 for of loop 🔴 ---------------------------------------

// "for...of" loop in JavaScript is a concise and convenient way to iterate over iterable 
// objects. It works well with arrays, strings, maps, sets, and ✅
// other iterable data structures. 🔍🔍🔍

// it doesn't works with objects.❌❌❌


// Here's the basic syntax:👇👇👇

// for (const element of iterable) {
//   // code to be executed in each iteration with 'element'
// }

// 👆 In the above syntex of for of loop 
// 1️⃣ const element is basically the name of the varible which we want to declare 👈👈
// 2️⃣ iterable is a data structure on which you want top apply "" for of ""loop  👈👈


// Let's see it in action with an array: 👇👇👇

// const myArray = [1, 2, 3, 4, 5];

// for (const element of myArray) {
//   console.log(element);
// }


// In this example, the loop goes through each element in the array `myArray`, and in each
//  iteration, it logs the current element to the console. It's a cleaner and more readable 
// alternative to the traditional "for" loop when you're dealing with iterable objects.🔍🔍🔍



//❗❗❗ meaning of "" 👉 iteration "" in loops👇👇👇

// Iteration is like taking a journey through a collection of elements, one at a time. When 
// you iterate over something, you're essentially going through each item in a sequence, like
//  an array or a list, and performing some action or operation on each element.

// In programming, iteration is often achieved using loops like "for" or "while." It allows
//  you to repeat a set of instructions for each item in a collection until you've covered 
// all of them. It's a fundamental concept in programming, and it's super useful for handling 
// data or performing repetitive tasks efficiently.

// So, in a nutshell, iteration is the process of doing something repeatedly for each element 
// in a sequence.


//Examples with array 👇👇👇  

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

//Examples with string 👇👇👇  


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//--------------------------- 🔴 Maps 🔴--------------------------------------


// 🛑🛑🛑🛑SOME basic properties of Map 👇👇👇

        //   map is a object. 
        //   holds a key-value pairs same as objects 
        //   but it provides insertion order of Keys. 
        //   Means it provides same output as you enter line by line keys and values.
        //   object and primitive valuse use as key or value
        //   it returns only unique value in it 🔍🔍🔍
        //  ❗ no duplicate value ,Map does't allow to return same keys and values. 


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

//Examples and syntex with Map 👇👇👇  


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


//Examples with object 👇👇👇  

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
    //     console.log(key, ':-', value);
// }    

// output =>❌❌ objects are not iterable with for of loop. 🔍🔍🔍


// Points to remember🧐🧐🧐
    
// These loops are called array specific loops but it doesn't mean that it is not  
// works for other data types.🔍🔍🔍  

// objects are not iterable with for of loop. 🔍🔍🔍
    

    
    
    
    
    
