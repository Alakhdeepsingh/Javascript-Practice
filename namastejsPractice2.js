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

// so what is happening over here is that var z = x();, so this lines means that x() function will be called and whatever x function will return then it will going to store in z variable so over here x function is returning y function so in the next line where we are doing the console.log over there function y will going to print after then z) function is being called so now in function z(); will going to call fnction y because inside z variable, x() function has returned fucntion y. Now, the point comes over here that when y function is being called than how it consoel.log 7 is because function y stores the lexical env. of its parent that is of its function x()

//
//this output 7 is due to closure, when function is return from the other function, they still maintain their lexical scope though x() don't longer exist but y() function remember its lexical scope
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

// function x() {
//     var a = 7;
//     function y() {
//       console.log(a);  //100
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// over here a is doing console.log to 100 becoz a has same address before 7 was pointing to it now 100 is pointing
//now comes that when we return y then you said parent scope means lexical env. of parents scope will also going to be return and it stores the whatever written inside it like over here it is var a = 7, but remember it does not give the value a = 7, it just gives the reference of a so later that refernece is changes to 100 so that is why we are getting 100 in cosolelog(z)

// Uses of closures :
// currying
// memoize
// setTimeouts
// maintaining state in async world
// Iterators

//9)
// 1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);  //1
//     },1000)
// }
// x();
//refer point 1

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("NamasteJs");
// }
// x();
//Output
//Namaste JavaScript
// 6
// 6
// 6
// 6
// 6
//var i is not block scope so it is referring to the same memory so again and again when loop will run but i will be pointing to the same memory so it will print 6 6 6 6 6
// and second reason is js loop don't wait for anything it will not wait for setimeout, solution is that if you want to print 1 2 3 4 5 then use let because let is block scope so whenever loop will run this i will be the new variable and when each time settimeout will run i has it's own identity means its own new copy which gets saved

//why 6 is coming , is because i variable is refering to same memory and second reason is js loop don't wait for anything it will not wait for setimeout, solution is that if you want to print 1 2 3 4 5 then use let because let is block scope so whenever loop will run this i will be the new variable and when each time settimeout will run i has it's own identity means its own new copy which gets saved
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("NamasteJs");
// }
// x();

// what if I don't want to use let then
// In below case, close is getting called for each value of i. And for each close() called a new execution context is getting created and in execution phase of that context new callback function context is created with lexical environment, which is reffering to i with which close() was called as close(i) was immediate parent of that callback function. Above cycle goes on and on until for loop ends.

// function clock(){
//     for(var i = 1 ; i <= 5 ; i ++){
//         function close(x){
//             setTimeout(function (){
//                 console.log(i);
//             },x * 1000);
//         }
//         close(i);
//     }
// }
// clock();

// In earlier case, only x() was there which was getting called only once and then callback function  was called 6 times but all of them were having their parent as x() and hence all were pointing to same address(reference) of i.

// everytime when I call the function close(i), it creates a new copy of i, itself function close(i)

//11) First Class Function
// 1.  What is Function Statement/Function Declaration?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
// For Ex  -  function xyz(){
//              console.log("Function Statement");
//            }
//            xyz();

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
//Ex-  var a = function xyx(){
//        console.log("Names Function Expression");
//     }
//     a();  //so xyz() function has gone inside a variable so now we will call it by a() not by xyz() becz xyz() is not in global space

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

// function operate(operation, a, b) {
//     return operation(a, b);
//   }

//   function add(x, y) {
//     return x + y;
//   }

//   function multiply(x, y) {
//     return x * y;
//   }

//   console.log(operate(add, 3, 4));        // Output: 7
//   console.log(operate(multiply, 2, 5));   // Output: 10

// In programming languages that support first-class functions, functions are treated as first-class citizens.
// This means that functions can be:
// Assigned to variables.
// Passed as arguments to other functions.
// Returned as values from other functions.
// Stored in data structures.
// In essence, first-class functions enable you to treat functions just like any other data type.

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
// //bith code are same only syntax is different so both will work same way, so when setTimeout function is called then inside it we are passing a function which is a callback function, so whenever the time expires then this callback function will going to be called and then it will going to be executed

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
// y is a callback function as we are passing in as a argument to another function, why do we say y function a call back function because we are giving it to another function as a argument, now when we call x function then it will going to print x and then it will going to call y function and then it will going to print y, so basically we are giving access to x function to call y function this is only a call back function, so whenever x function want then it will going to call y function, so this creates an async enviorment , as js is synch and single threaded means its runs code line by line

// function a(b){
//     b(10,20);
// }
// a(function b(s,q){
//     console.log(s+q);
// })
//Output
// 30

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickme").addEventListener("click", function () {
//     console.log("Button Clicked", ++count);
//   });
// }
// attachEventListener();

//addEventListener is a inbuilt function and inside it we are passing a function which is a callback function, so whenever we click an event listener will going to call a function which is a callback function

// function () {
//     console.log("Button Clicked", ++count);
//   }

//   this functions forms a closure as it is inside another function and it forms lexical env.

//13) asynchronous js and event loop

// first he has explained about the call stack and how it works so that follow the 2nd and 3rd video notes there I have written about call stack

// call stack is synchronous and single threaded but if we want to make it asynchronous then how to do that ?

//call stack is inside the JS engine and this js engine is inside the browser and browser has some super powers which are given to js engine and these super powers are called web api's and these web api's are console, location, DOM api, setTimeout, fetch, local storage, so these are the super powers which are given to js engine and these are the web api's, so whenever we call these web api's then they are going to do their work and then they will going to give the result to the callback queue, so callback queue is a place where all the callback functions are stored, so whenever we call a web api then it will going to do its work and then it will going to give the result to the callback queue and then event loop will going to check that if call stack is empty or not, if it is empty then it will going to take the callback function from the callback queue and then it will going to put it inside the call stack and then it will going to execute it, so this is how the call stack works

// console, location, DOM api, setTimeout, fetch, local storage are not a part of js engine, they are a part of browser

// console.log("Start");
// setTimeout(function cb(){
//   console.log("Callback");
// },5000);
// console.log("End")

// when time expires then cb() will going to be inside callback queue and then the event loop will going to check that if call stack is empty or not, if it is empty then it will going to take the callback function from the callback queue and then it will going to put it inside the call stack and then it will going to execute it, so this is how call stack works

// console.log("Start");
// document.getElementById("btn").addEventListener("click",function cb(){
//  console.log("Callback");
// })
// console.log("End");

// this example is of Dom api so inside webapi enviornment callback will be registered and it will cosnole.log(end) and this event handler will stay in webapi enviornment, and when we click on the button then this callback functio will going to be registered in the callback queue and then same..

// why do we need callback queue is because whenever lets say user is pressing utton 7-8 times for eg. then all the callback functions will going to be stored in the callback queue and then event loop will going to check that if call stack is empty or not, if it s empty then it will ging to take call back function one by one from the callback queue....

//this is how call stack working asynchronously

// console.log("Start");
// setTimeout(function cbT() {
//   console.log("CB SetTimeout");
// }, 5000);
// fetch("https://api.netflix.com").then(function cbF() {
//   console.log("CB Netflix");
// });
// console.log("End");

//fetch basically goes and request a api call and this fetch function returns a promise and we have to pass a callback function which will be executed when the promise is resolved means that when we get the data then this callback function will be executed and this callback function will be stored in the microtask queue and this microtask queue is given priority over the callback queue, so when we fetch then it will going to reauest a api call and then it will going to store the callback function in the microtask queue and then it will going to console.log(end) and then it will going to check that if call stack is empty or not, if it is empty then it will going to take the callback function from the microtask queue and then it will going to put it inside the call stack and then it will going to execute it, so this is how call stack works.

// first function goes to web apis env. then -> callbackqueue -> callstack -> execution

// microtask queue is given priority over the callback queue in the event loop

// what can come in microtask queue is promises and mutation observer but all the other call back function which comes from settimeout, event listner, etc goes inside call back queue

// 1. Browser has superpowers that are lent to JS engine/call stack to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

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
