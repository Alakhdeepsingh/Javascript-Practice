//1) JS work and execution context
//2) how code is executed
//3) Hoisting
//4) How function work in JS
//5) shortest JS program
//6) undefined vs not defined
// scope chain, scope,lexical env.
//let & const in temperal dead zone
//7) Block Scope and Shadowing in JS

//1)
// Everything in Javascript happens inside the execution context
// there are two component that is memory component and Code component
//memory component is also known as variable enviorment
//in memory component functions and variable are stored as key value pair

//code componenet is also known as thread of execution
//in this we write code and it runs line by line ( one line at a time )
//js is a synchronous single threaded language

//2)
//when we run our program an execution context is created
// var n = 2;
// function square (num){
// var ans = num * num;
// return ans;
// }
// var square2 = square(n)
// var square4 = square(4)

//everything will happened inside global execution context, once whole execution context
//is created than in first execution phase all the variables will get stored in memory
//and in memory comp. all the variables will be defined with undefined and
//and function will store whole function on memory comp.
//for example n,square2,square4 will store undefined
//square , this square function will store whole function in memo comp
// function square (num){
//     var ans = num * num;
//     return ans;
// }

//now we will move to code execution phase .
// now 2 will going to n by replacing uncdefined
// square function will not work  because it is not called
// so we will go to this line var square2 = square(n)
//and over here square(n) function is called
//now square () function is called creates its own new execution context because all the functions creates its own global execution context
// in that also there are 2 componenets memeory and code
//so inside function there is num and ans so first they will
// be defined as undefines in memory component then in code component
// num*num will happenend and and then the value from code comp will go to the memory comp that is 4 in ans
// and then return ans will go to square2 (variable) means the value
// of ans will go to square2 which is in memory and then the execution context of function will be deleted

//call stack maintains the order of execution of the execution context in stack
//so why we are using call stack is because as we are managing execution context upwards like when any function is being
//called then a new execution context is created okk, nowlets say if there is function and inside that function a new function is being called then
//managing execution context is very difficult

//so that's why we use call stack because it is being used as stack
//like when inside global ec there is any function and if it is being called then new execution context created and once it's work is done thenit will go out through this things become very clear
//  |      |
//  |  E1  |
//  |_GEC _|

//  |      |
//  |  E2  |
//  |_GEC _|

//3)
//hoisting

// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
// This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

//even before code initialize all the variables and function get initialized before only in the mmemory space

// var color;       - declare
// color = "green"  - initialize

// getName();
// console.log(x);
// var x = 7;
// function getName (){
//      console.log("Namaste JS")
// }

// output
// Namaste JS
// undefined
//undefined means that x has been allocated memory but it has not been assigned any value

//over here why undefined has came because when we run our program then EC is being created then in global space all the vaiables and functions are initialized so then variables are initialized with undefined ( for detail please refer 2nd videos)

//getName();
// console.log(x);
// function getName (){
//      console.log("Namaste JS")
// }

// output
//reference error : x is not defined

// getName();
// console.log(getName);
// var x = 7;
// function getName (){
//      console.log("Namaste JS")
// }
// output
//getName (){
//      console.log("Namaste JS")
// }

// getName();
// console.log(getName);
// var x = 7;
// var getName = () => {
//      console.log("Namaste JS")
// }

//in this case js variable is just behave like another
//variable so the output will be undefined

// but if we simply write function then and prints that then
//js will print whole function examples are above

// getName();
// console.log(getName);
// var x = 7;
// var a = function getName() {
//      console.log("Namaste JS")
// }
// same in this case also undefined will come

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:
// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
// var hoistedVariable;

//4)
//in 4th video How function work in JS
// he has teached about call stack so I have written in above so you can check that

//5)
//Shortest JS program

// • window object is created by the JS engines of the respective browsers when global execution context is created.
// 	• whenever an execution context is created a "this" variable is also created.
// 	• at the global level "this" points to the global object( window object in case of browsers).
// 	• anything that is not inside a function is the "global space".
// 	• whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).

// 	so to access the variables/function defined in the global space ,
// 	we can use any of the below:
// 		console.log(window.a);
// 		console.log(a);
// 		console.log(this.a)             //at the global space level, where this points to the window object

// empty file is shotest JS program because when you run that file and see in console and there if you write window then an object will come
// because window is an object and this keyword is equal to window,
// In global space, (this === window) object.
// whenever global execution context creates then (window object and this keyword) also get created
//global object is known as window
//gloabl space : any code we write inside js which is not inside the function

// var a = 10;
// function a(){
//      var b = 20;
// }
//var a is global space but var b is not global space because it is inside function

//everything is present on window so whatever we write in code that get attached in window
//for example if we want to access a value then we can do window.a or this.a in console they both will give same value 10

//6)
//Undefined vs not defined

// 1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

// 2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

// 3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

// 4.Remember undefined !== not defined.

// undefined means that ki mtb hamne memory tho allocate kar dhi hai but value nhi hai usme
// not defined meaning that memory allocate nhi ki hai

// var a;
// console.log(a);
//udefined

// var a;
// console.log(b);
//not defined

// var z=10;
// console.log(z);
//10

// var a = 7;
// undefined

// when I am writing this statement
// var a = 7; and then clciking on enter then why undefined is coming

// ChatGPT
// I see where the confusion is coming from. In some JavaScript environments, when you enter a statement like var a = 7; in the console and press Enter, the console will display undefined after the statement. This behavior occurs because the console is showing the result of the statement execution, and variable declarations with var return undefined.

// Here's a breakdown of what happens:
// You enter var a = 7; in the console and press Enter.
// The statement is executed, and a variable a is declared and assigned the value 7.
// After executing the statement, the console displays the result of the statement execution, which is undefined. This is because variable declarations with var return undefined.
// So, in this case, undefined is not associated with the variable a, but rather with the result of declaring the variable. It's a common behavior in some JavaScript environments to display undefined after variable declarations, but it doesn't mean that the variable a itself is undefined. The variable a holds the value 7.

// User
// I am not understading van you explain in more simpler manner
// Certainly, let's simplify it:
// When you enter var a = 7; in the JavaScript console and press Enter, the console executes that code.
// After executing var a = 7;, it displays undefined in the console.
// The undefined you see in the console is not related to the variable a or its value. It's just the console's way of showing that the line of code var a = 7; has been executed, and it doesn't produce a meaningful result to display.
// The variable a is declared and has the value 7, but the undefined shown in the console is a separate indication that the line of code was executed successfully.

//undefined
//if we directly do console to any variable then undefined will come because nither we have initialize or declared that variable

//the scope chain, scope and lexical enviorment
// function a() {
//    var b = 10;
//    c();
//  function c(){
//    console.log(b);
//  }
// }
//
// a();

// c is the lexical scope to a
// a is the lexical scope to global contexg

//when b will console.log

//7)
//THE SCOPE CHAIN, SCOPE AND LEXICAL ENV.

// 1. Scope of a variable is directly dependent on the lexical environment.
// 2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
// 3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
// 4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
// 5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
// function a() {
//   console.log(b);
// }
// var b = 10;
// a();
// //10

// function a() {
//   var b = 10;
// }
//   console.log(b);
// a();
//b is not defined because b is not present in the scope of a function a() so it will go to global space and it will not find b there so it will give b is not defined

// function a() {
//   var b = 30;
//   console.log(b);
// }
// var b = 10;
// a();
//30

//js first see that is b has declared in its scope if not
//then it search in global space

// function a() {
//   var b = 30;
//   c();
//   function c(){
//      console.log(b);
//   }
// }
// var b = 10;
// a();
//30

// function a() {
//   var b = 30;
//   function c(){
//      console.log(b);
//   }
//   c();
// }
// var b = 10;
// a();

//you can call c() function anywhere see in the above two code, don't get confused with the position of c() function, just remeber that c() function is lexically sitting inside a() function, so in call stack first a() function will be called and then when it will be
// executed then c() function will go in the call stack and then it will be executed and then it will be deleted from the call stack, so don't get confused with the position of c() function just remeber we call function outside the function

// function a() {
//   var b = 30;
//   c();
//   function c(){
//   }
// }
// a();
// console.log(b);
//b is not defined

//scope means where you can access a specific
//variable or a function in our code

//whenever execution context is created a lexiacal env. is also created, lexical env. is the local memory along with lexical env. of its parent
// c() function is lexically sitting inside a() function
// a() function is lexically inside the global scope

// scope chain is like for example if I am doing console.log(b)
// so it will first find in its local scope that is inside function c()
// then it will find in function a() and if it will not get there
// then it will go to find in global space , so this chain is known as scope chain of finding from local scope to parent scope to it's parent scope to global scope..... is scope chain

// function a() {
//   var b = 30;
//   c();
//   function c(){
//   }
// }
// a();
// console.log(b);

//in this example c() function has lexical enviornment because lexical env. is the local memory along with lexical env. of its parent
//              {
//   var b = 30;
//   c();
//   function c(){
//   }
// }
// a();
// console.log(b);
//imgine this because

//8) Let and const : Temporal Dead Zone
//

// 1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
// 2. Temporal Dead Zone exists until variable is declared and assigned a value.
// 3. window.variable OR this.variable will not give value of variable defined using let or const.
// 4. We cannot redeclare the same variable with let/const(even with using var the second time).
// 5. const variable declaration and initialisation must be done on the same line.
// 6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
// 7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
// 8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

// console.log(b);
// let a = 10;
// var b = 100;
// undefined
//
// console.log(a);
// let a = 10;
// var b = 100;
// ReferrenceError : Caanot access a before initialization
// ReferenceError occurs when trying to reference a variable or function that is not declared or is out of scope

// if any variable got assigned memory so that variable is hoisted
// so in case of var the variable got store in global space
// but in case of let and const , variable don't get store in global that's why Reference error comes
//
// Temporal dead zone means since this let variable got hoisted ( means starting mai tho alag memory mai rahega undefined (in script memeory mai undefined rahega naa ki global memory mai) (mtb hoisted tho rahega ) phir jabh usme value jaegi  then it will go to different memory space (global memory space) and then it will get initialize and then it will get some value
// mtb initlize hogha so itne time ke bech ho temporal dead zone bolte hai ) and till it got initialize some value
//
// similarly, if we try to access any value in window object in console
// then window.b will print 10 but window.a will give undefined because let and const are in different memory space
//
// Also we connot able to redeclare any variable
//
// let a = 10;
// let a = 100;
// syntax error : a has already been declared
//
// var does not give any error
//
// const is even most strict then let
//
// let a;
// a=1000;
// console.log(a);
// we can do this in let like declare variable first then initialize it
//
// but we cannot do this in const
// const e;
// e = 2000;
// console.log(e);
// syntax error: missing initializer in const decl.
//
//
//const b = 1000;
//b=10000;
//console.log(b);
//Type error: assignment to constant vaible
//A TypeError occurs when an operation is performed on a value of the wrong type.
//
//Three types of error are there type error, syntax error, reference error
//
//
//
// how to avoid temporal dead zone : by initializing and declaring the varibale at the top
//
//

//9) Block Scope and Shadowing in JS
//
// {
//
// }
// this is block scope
// and whatever we writed code inside it that code get grouped
//
// if(true) console.log("alakh")
// this is correct statement so if statement will true then only console will happen
//
// if there will be more than 1 statement then grouped in curly braces { }
// black combines multiple statements
//
//{
//var a = 10;
//let b = 20;
//const c = 30;
// }
// we cannot access let and const out of scope, we can access it
//
// console.log(a)  : 10
// console.log(b)  : ReferenceError : b is not defined
// console.log(c)  : ReferenceError : c is not defined
//
//
// var a = 100
//{
//var a = 10;
//let b = 20;
//const c = 30;
//console.log(a)   : 10
//console.log(b)  : 20
//console.log(c) : 10
//}
//console.log(a) :10
// why this console.log(a) print 10 because a is referring to same memory space as you have seen global space
//
//if we have same name variable outside the block over here it is var a = 100 so a=10 shadows this a=100,  so that is why inside {} we are getting 10 as ouptut from a not 100
//let and const behaves different as first tho thier memory space is not inside global space, one memory space is inside blocked space and second is in different space
//let b = 100
//{
//var a = 10;
//let b = 20;
//const c = 30;
//console.log(a)   : 10
//console.log(b)  : 20
//console.log(c) : 10
//}
//console.log(b) :100
//this b is consoling 100 because b has 2 memeory space same in case of const will also happen
// remember one thing that var always get memory in global space

//let has differnet memory space in global and in block
//but var has same memory in global and in block so that is why a is pointing to same memory space
//but b is pointing to different memory space so that is why b is not getting shadowed
