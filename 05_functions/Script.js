// A Function is block of code used to perform a specific task

// A Function declaration (defining a function)
//    function square(number){

//    console.log("Checking if it is working");
//    return number * number;
//}
// A Function Call (Calling/Executing a function)
//    const result = square(5);
//    console.log(result);

// Declaring a function
//     function name(params){
       // statements
       // have access to "this" keyword
//     }

// A function expression
//      const name = function(){
        // Statements
//      }

// An Arrow Function Expression
//        const name = (params) => {
//        // statements
//        }

// Function without return
//  function sayHi(name){
//      console.log(`Hi, ${name}`);
//  }
//  sayHi('Cedric');

// Functions by default return undefined unless stated otherwise
//  function add(a, b){
//        return a + b;
//   }
//   const sum = add(2,2);
//   console.log(sum);

//    function test(){
//     return true;
//     return false;
//     }
//       const bool = test();
//        console.log(bool);


// Two ways of working with Arrow functions - This is the modern way of writting java script
const square = (number) => {
    return number * number;
}
const result = square(5);
console.log(result);

// Second Step
const addition = (twoNumber) => twoNumber + twoNumber
const addTwoTogether = addition(10);
console.log(addTwoTogether);


