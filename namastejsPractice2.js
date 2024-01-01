//8) Closures
//9) setTimeout + Closures
//10) Crazy js interview (closures)
//11) first class function
//12) call back functions in event listeners
//13) asynchronous js and event loop
//14) js engine exposed

//8) function along its lexical env forms a closure ,
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
//output will be 7 as we have studied in lexical env. and this is only the closure
//it creates it's own memory space
//and it looks like this
//Closure (x)
//a:7

// function x() {
//     var a = 7;
//     function y() {
//       console.log(a);
//     }
//     return y;
//   }
// var z = x();
// console.log(z);
//output
// f y(){
//     console.log(a);
// }
// y function will be returned to z and x will be out from call stack

// function x() {
//     var a = 7;
//     function y() {
//       console.log(a);
//     }
//     return y;
//   }
// var z = x();
// console.log(z);  //7
// z();
//output
//7
//this output 7 is due to closure, when function is return from the other function, they still maintain their lexical scope though x() don't longer but y() function remember its lexical scope
//when we return  not just y was return but whole closure function y along with its lexical scope was return

// function x() {
//     var a = 7;
//     return function y() {
//       console.log(a);
//     }
//   }
// var z = x();
// console.log(z);  //7
// z();

//the above code and this code behave same as we return y above and over here we have written return infront of function so both are same

//9)

//11) First Class Function
// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//                  xyz();
//       For Ex  -  function xyz(){
//                             console.log("Function Statement");
//                        }

// 2.  What is Function Expression ?
// A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
//       For Ex - var a = function(){
//                             console.log("Function Expression");
//                     }

// a();
// var a = function(){
//    console.log("Function Expression");
//}
//type error a is not a function , this error is coming becoz we are calling upward of function declaration, We can not do Hoisting by this becz it acts like variable.

// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//       For Ex - function(){
//                      }

// 4.  What is Named Function Expression ?
// A.  A function with a name is known as Named Function Expression.
//       For Ex - var a = function xyx(){
//                             console.log("Names Function Expression");
//                      }

// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//        For Ex - function ab( param1, param2 ){
//                               console.log("
//                       }
//        & When we call this function & pass a variabel in this ( ) that is our Arguments
//        For Ex - ab( 4, 5 );

// 6.  What is First Class Function Or First class citizens?
// A.   The Ability of use function as value,
// *     function Can be passed as an Argument and can be return from another function is called as first class function,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//        For Ex - var b = function(param){
//                              return function xyz(){
//                                      console.log(" F C F ");
//                              }
//                      }
// 7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.

//12) Call Back functions
// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used

// setTimeout(function () {
//   console.log("alakh");
// }, 5000);

// setTimeout(() => {
//   console.log("deep");
// }, 1000);
// //bith code are same only syntax is different

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
// y is a callback function as we are passing in as a argument to another function

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickme").addEventListener("click", function () {
//     console.log("Button Clicked", ++count);
//   });
// }
// attachEventListener();

// function () {
//     console.log("Button Clicked", ++count);
//   }

//   this functions forms a closure as it is inside another function and it forms lexical env.

// 14)js engine exposed
// 1. JS runtime environment contains all elements required to run JS.
// 2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
// 3. JS engine is a piece of code.
// 4. Process includes Parsing ---> Compilation -----> Execution.
// 5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
// 6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
// 7. Execution and Compilation are done together.
// 8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.

// Js source code -> parser -> abstract syntax tree -> interpreter ignition -> compiler turbofan -> optimized machine code -> byte code
// Js source code goes through a parser and it generates abstract syntax tree then abstract syntax tree has interpreter ignition and it converts the code to the byte code which is then executed , along with interpreter works the turbo fan compiler and turbo fan compiler
// works on optimizing the code and then it generates the bytecode which is then executed
