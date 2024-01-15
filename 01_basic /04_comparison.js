
// example of comparisons 👇👇👇

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
 
                            //  ❌❌❌

// Always try to avoid these types of comparisons or comparison between different data-types 
// These are  called [Loose Equality] double equals-to [ == ] only check the values not the data-type and
// These are  called [Strict Equality] triple equals-to [ === ] always check the data-types and is safer

                          // 🔍🔍🔍

// Use == if you want a loose comparison with type coercion.
// Use === if you want a strict comparison without type coercion.

                            // ✅✅✅

// It is generally recommended to use strict equality (===) because it avoids unexpected results due to type coercion. When you use ===, you explicitly check for both value and type equality, which can lead to more predictable and safer code.


//example of loose equality [ == ] 👇👇

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


//example of Strict equality [ === ] 👇👇

// === 

console.log("2" === 2);  

// output:(false) because data-type is different.