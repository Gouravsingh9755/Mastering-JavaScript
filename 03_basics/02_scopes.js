// --------------------  difference between Scopes of [Var ,LET , CONST] -------------------

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// output=> 10 20 30 these all are working same at this point... ✅✅✅

// { } curly braces are called " Scope " which is used in functions and if-else etc.. ❗❗🔍🔍🔍

// { } for objects these are working normally as a syntex not as a scope. 🔴🔴🔴

// difference between these [var, let, const] is happens through these { } curly braces which 
// are technically known as Scopes.  

// ------------------------------------------------------------------------------------------
// there are 4️⃣ types of ' Scopes ' in js.

// 1️⃣Global Scope: The outermost scope that encompasses the entire script or program 
//                  Variables declared in the global scope are accessible throughout the
//                  script.

// 2️⃣Function Scope: Variables declared inside a function are local to that function and not
//                    accessible outside of it.

// 3️⃣Block Scope (Introduced in ES6): Variables declared with let and const are block-scoped.

// 4️⃣Lexical Scope (Closure): When a function is defined inside another function, it forms a
//    closure, and the inner function has access to its own scope and the scope of the 
//    outer function.

// ------------------------------------------------------------------------------------------


// for example  👇👇👇

// if (true) {
//     let a = 10
//     const b = 20
//     //var c = 30    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// if we try to access the values of a, b, c out side the Scope of "if" then we got error ❌❌❌

//  error=> " let a "  and  " const b " is not defined 👈👈👈

// because the Scopes of let and const are not allows the values to be access outside the "if"

// now we have to comment the console.log of let a and const b then it gives
// the value of var c = 30  🔍🔍🔍

// it is not safe for any function or if - else condition because anyone manipulates the 
// values of that function or if - else condition from outside which leads to distroy our 
// whole program by mistake or by intentionally  👈👈👈 please read 🔍🔍🔍


// for example 👇👇👇


// please read 👇👇🔍🔍🔍

// if someone declares a [ var c = 300 ] at the global scope and then there are many persons
//  working on the same project and if by mistake  somebody declares another [ var c = 30 ]
// inside the globle scope or function or if-else consition scopeor importing from the 
// another file  in anyone... 

// now the value of var c is 30. not the 300 becuse two persons create same named var 
// variable and the value got an update fromm 300 to 30... due to this " var "is unsafe. 

// for example 👇👇👇


// var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(c);
// output=> 30     🔍🔍🔍



// Now We perform the same thing to  explore " let "  and " const " 👇👇👇


let a = 300
const b = 600
if (true) {
    let a = 10
    const b = 20
     
    // console.log("INNER: ", a);
// output=> 10   when we checked at the inside block-scope the value remains same. 🔍🔍🔍

    // console.log("INNER: ", b);
// output=> 20   when we checked at the inside block-scope the value remains same. 🔍🔍🔍

}
// console.log(a);
// output=> 300   when we checked at the globel scope the value remains same. ✅✅✅

// console.log(b);
// output=> 600   when we checked at the globel scope the value remains same. ✅✅✅

// -----------------------------------------------------------------------------------------


//                         🔴🔴🔴 one important point 🔴🔴🔴


// Global Scope = Acts different for [windows from console.log] or for [node from terminal]  








function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}
