//15) Trust issue with settimeout
//16) Higher order function
//17) map,filter, & reduce
//18) callback hell
//19) Promises
//20) a) Creating promise, chaining, error handling ,
//b)  Promise APIs + Interview Questions
//21) async await
//22)this keyword

//15) Trust issue with settimeout

// trust issue with settimeout means we can

// console.log("Start");
//
// setTimeout(function cb(){
//  console.log("Callback");
// })
//
// console.log("End");

// first start will print, then we see settimeout, so it will register call back method into the webapi env that is cb.

//suppose after console.log(end) there are million lines of code and it will take 10 sec to execute so after 10 sec it will go to the callback queue, basically global execution context is busy executing millions line of code and it will not check the callback queue, so after 10 sec it will go to the callback queue and remeber this function cb(), its time get over after 5 sec, but it will not execute, because global execution context is busy execution millions line of code and it will not check the callback queue, so after 10 sec it will go to the callback queue and remeber this function cb(), its time get over after 5 sec, but it will not execute, because global execution context is busy execution millions line of code and it will not check the callback queue, so after 10 sec it will go to the callback queue and finally after 10 sec it will execute the callback function cb().

// suppose this is a program

// console.log("start");

// setTimeout(function cb(){
//      console.log("CallBack function")
// },5000)

// console.log("end");

// my question is that first settimeout will add this callback function cb inside web api env. then later it will add in callback queue

// so my question is that when does cb goes to callback queue?
// ChatGPT
// In the given code, the setTimeout function schedules the callback function (cb) to be executed after a delay of 5000 milliseconds (5 seconds). Here's the sequence of events:

// The console.log("start"); statement is executed immediately.

// The setTimeout function is encountered, and it schedules the cb function to be executed after a delay of 5000 milliseconds. The setTimeout function does not block the execution of the program; it returns immediately, and the program moves on to the next line.

// The console.log("end"); statement is executed immediately after the setTimeout function.

// Now, the program has completed its execution, and the event loop comes into play.

// After 5000 milliseconds, the callback function cb is moved to the callback queue.

// Since the main thread is not blocked and the call stack is empty, the event loop takes the callback function from the callback queue and pushes it onto the call stack for execution.

// The console.log("CallBack function"); statement inside the callback function is then executed.

// In summary, the callback function (cb) goes to the callback queue after the specified delay of 5000 milliseconds, and it gets executed when the event loop retrieves it from the callback queue and pushes it onto the call stack.

// so, in gec million of line of code are running so basicaaly call stack is not empty and that call back function cb after 5 sec comes inside the callback queue and then event loop will check that call stack is not empt as it is execution millions line of code so that is why it will not execute the callback function cb, so after 10 sec it will check the callback queue and it will execuete the callback function cb

// console.log("Start");
// function cb(){
//     console.log("Callback");
// }
// setTimeout(cb,0);
// console.log("End");

// this is also a syntax of setTimeout

//16) Higher order function
// function higherOrderFunction() {
//   // Returning a function
//   return function a() {
//     console.log("This is a function returned by the higher-order function");
//   };
// }

// // Assigning the returned function to a variable
// var returnedFunction = higherOrderFunction();
// console.log(returnedFunction);
// // Calling the returned function
// returnedFunction();
// console.log("end");

// In JavaScript, a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. This concept is based on the idea of functions being first-class citizens in the language, meaning they can be treated as values and passed around just like any other data type.

// There are two main types of higher-order functions: functions that take functions as arguments (callback functions) and functions that return functions (closure).

// Functions as Arguments (Callback Functions):

// javascript
// Copy code
// function higherOrderFunction(callback) {
//   // Some code here
//   callback(); // Calling the callback function
// }

// function callbackFunction() {
//   console.log("This is a callback function");
// }

// // Passing a function as an argument
// higherOrderFunction(callbackFunction);
// In this example, higherOrderFunction is a higher-order function because it takes a function (callbackFunction) as an argument and invokes it.

// Functions as Return Values (Closure):

// javascript
// Copy code
// function higherOrderFunction() {
//   // Returning a function
//   return function() {
//     console.log("This is a function returned by the higher-order function");
//   };
// }

// // Assigning the returned function to a variable
// var returnedFunction = higherOrderFunction();

// // Calling the returned function
// returnedFunction();
// In this example, higherOrderFunction is a higher-order function because it returns a function. The returned function can be assigned to a variable (returnedFunction) and then invoked.

// Higher-order functions are commonly used in functional programming and allow for more concise and expressive code. They enable the implementation of features like map, filter, and reduce in JavaScript, making it easier to work with arrays and collections.

// User
// function higherOrderFunction() {
//   // Returning a function
//   return function() {
//     console.log("This is a function returned by the higher-order function");
//   };
// }

// // Assigning the returned function to a variable
// var returnedFunction = higherOrderFunction();

// // Calling the returned function
// returnedFunction();

// please explain which line will run line by line
// ChatGPT
// Certainly! Let's go through the code step by step:

// Function Declaration:

// javascript
// Copy code
// function higherOrderFunction() {
//   // Returning a function
//   return function() {
//     console.log("This is a function returned by the higher-order function");
//   };
// }
// Here, you have a function named higherOrderFunction. This function doesn't take any parameters, but it returns another function.

// Assigning the Returned Function to a Variable:

// javascript
// Copy code
// var returnedFunction = higherOrderFunction();
// The higherOrderFunction is called, and its result (which is a function) is assigned to the variable returnedFunction.

// Calling the Returned Function:

// javascript
// Copy code
// returnedFunction();
// Finally, you call the function that was returned by higherOrderFunction. This results in the message "This is a function returned by the higher-order function" being printed to the console.

// So, when you run this code:

// The function higherOrderFunction is defined.
// higherOrderFunction is invoked, and it returns a function.
// The returned function is assigned to the variable returnedFunction.
// The function stored in returnedFunction is called, and it prints the specified message to the console.
// As a result, the output will be:

// vbnet
// Copy code
// This is a function returned by the higher-order function

//17) map,filter, & reduce

// JavaScript, map, filter, and reduce are higher-order functions that operate on arrays. They provide a concise and expressive way to manipulate arrays.

// map: It creates a new array by applying a given function to each element in the original array.

// Example: Doubling each element in an array
// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = originalArray.map((num) => num * 2);
// console.log(doubledArray);

// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = originalArray.map(function a(num) {
//   return num * 2;
// });
// console.log(doubledArray);

// 1st way to write map function
// function double(x) {
//   return x * 2;
// }
// const output = originalArray.map(double);
// console.log(output);

//2nd way to write map function
// const output = arr.map(function double(x) {
//   return x * 2;
// });

// const doubledArray = originalArray.map((num) => {
//   return num * 2;
// });
// console.log(doubledArray);

// 3rd way to write map function if there is a single line then you can ignore return and curly braces and also you can ignore the function keyword and the name of the function because it is an anonymous function and you can also ignore the parenthesis of the parameter if there is only one parameter.

// const doubledArrayss = originalArray.map((num) => num * 2);
// console.log(doubledArrayss, "qwerty");

// map function in JavaScript is a higher-order function that applies a provided function to each element of an array and returns a new array containing the results. The original array remains unchanged.

// How map works:
// Iterates Over Each Element: map iterates over each element in the original array.

// Applies the Callback Function: For each element, it applies the provided callback function.

// Builds a New Array: The return value of the callback function for each element is collected and forms a new array.

// Returns the New Array: The resulting array, containing the mapped values, is returned.

// filter: It creates a new array by filtering out elements from the original array based on a given condition.

// javascript
// Copy code
// // Example: Filtering even numbers from an array
// const originalArray = [1, 2, 3, 4, 5];
// const evenNumbers = originalArray.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// How it works:
// Iterates Over Each Element: filter iterates over each element in the original array.

// Applies the Callback Function: For each element, it applies the provided callback function.

// Tests the Condition: The callback function returns true or false based on whether the current element passes the condition.

// Builds a New Array: If the condition is true, the element is included in the new array; otherwise, it is excluded.

// Returns the New Array: The resulting array, containing the filtered elements, is returned.

// const originalArray = [1, 2, 3, 4, 5];

// const evenNumbers = originalArray.filter(function(num) {
//   return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]
// In this example, the filter function is used to create a new array (evenNumbers) containing only the even numbers from the originalArray.

// Using Arrow Function (ES6+):
// With ES6 arrow functions, the code becomes more concise:

// javascript
// Copy code
// const originalArray = [1, 2, 3, 4, 5];

// const evenNumbers = originalArray.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4]

//reduce

// The reduce function in JavaScript is a higher-order function that iterates over the elements of an array and accumulates a single result. It's often used for operations where you need to reduce an array into a single value, such as summing up all elements, finding the maximum value, or concatenating strings. The original array can be transformed into a single output value.

// Here's a more in-depth explanation of how reduce works:

// Syntax:
// javascript
// Copy code
// const result = array.reduce(callback(accumulator, currentValue[, index[, array]]) {
//   // return updated accumulator
// }, initialValue);
// callback: The function that is applied to each element in the array. It takes four parameters:

// accumulator: The accumulated result of the previous iterations. It starts with the initialValue or the first element of the array if no initialValue is provided.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue: An optional parameter specifying the initial value of the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

// result: The final accumulated result after iterating over all elements in the array.

// How it works:
// Accumulator Initialization: If an initialValue is provided, the accumulator is set to that value. Otherwise, it is set to the first element of the array.

// Iterates Over Each Element: reduce iterates over each element in the array.

// Applies the Callback Function: For each element, the callback function is applied, taking the current accumulator value, the currentValue, and optionally the index and array.

// Updates the Accumulator: The callback function returns the updated value of the accumulator, which is used in the next iteration.

// Returns the Final Result: After iterating through all elements, the final value of the accumulator is returned as the result.

// Example:
// javascript

// const array = [1, 2, 3, 4, 5];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const sum = array.reduce(function(accumulator, currentValue) {
//   accumulator = accumulator + currentValue;
// return accumulator;
// }, 0);

//currentValue is the current element of the array and the accumulator is the previous value of the current element of the array.
//pplease refer the above program where sum is behaving like accumulator and currentValue is behaving like current element of the array

// console.log(sum); // Output: 15
// In this example, the reduce function is used to calculate the sum of all elements in the array starting from an initial accumulator value of 0.

// Using Arrow Function (ES6+):
// With ES6 arrow functions, the code becomes more concise:

// javascript
// Copy code
// const array = [1, 2, 3, 4, 5];

// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15

//18) Callback hell
// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell.

// function doTask1(callback) {
//     setTimeout(function() {
//       console.log("Task 1 completed");
//       callback();
//     }, 3000);
//   }

//   // function doTask2(callback) {
//   //   setTimeout(function() {
//   //     console.log("Task 2 completed");
//   //     callback();
//   //   }, 1000);
//   // }

//   // Function 3
//   function doTask3(callback) {
//     setTimeout(function() {
//       console.log("Task 3 completed");
//       callback();
//     }, 1000);
//   }

//   // Callback hell example
//   doTask1(function() {
//     doTask2(function() {
//       doTask3(function() {
//         console.log("All tasks completed");
//       });
//     });
//   });

// function doTask1(callback) {
//   setTimeout(function () {
//     console.log("Task 1 completed");
//     callback();
//   }, 3000);
// }

// function doTask2(callback) {
//   setTimeout(function() {
//     console.log("Task 2 completed");
//     callback();
//   }, 1000);
// }

// Function 3
// function doTask3(callback) {
//   setTimeout(function () {
//     console.log("Task 3 completed");
//     callback();
//   }, 1000);
// }

// // Callback hell example
// doTask1(function a() {
//   doTask2(function b() {
//     doTask3(function c() {
//       console.log("All tasks completed");
//     });
//   });
// });
// 2 - Inversion of control
// The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain.
// That process is called inversion of control.

//19) Promises

// Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart); //order Id
// proceedToPayment(orderId); //payment Id
// so over here we are creating an order and then we are proceeding to payment, so we are doing two asynchronous operations over here, as proceedToPayment function is dependent on createOrder function like when the order is created then only we can proceed to payment, so we are doing two asynchronous operations over here, so we can use promises to handle these two asynchronous operations

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });
// so this is the callback way of handling asynchronous operations, but there is issue that we have pass the callback function inside the createOrder function and then sitting that inside the code will work
// so we can use promises to handle these two asynchronous operations

// const promisedd = createOrder(cart);
// promise is nothing but an empty promise object with some data value in it and it will hold some whatever the value is returned by the createOrder function, now we don't know that how much time it will take to create the order, but this line will return a promise object like this {data:undefined, status:pending, value:undefined} and then we can use then method to handle the value returned by the createOrder function, so lets say after some 5 sec it will create a order and fill this promise object
// {data:orderDetails, status:resolved, value:orderDetails} then .then method
// with the value returned by the createOrder function

// so now we will attach .then in front of promisedd object and then we will pass a function inside, so now comes question what is .then and why are we using it, so .then is a method which is used to handle the value returned by the promise object, so when the value is returned by the promise object then it will call the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method, so now we can use the value returned by the promise object inside the function inside the .then method, so let me explain you one simplest example of promise
// const promisedd = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Order Id");
//   }, 3000);
// });
// promisedd.then(function (orderId) {
//   console.log(orderId);
// });
//so let me explain that what does new keyword does, so new keyword is used to create a new object, so new Promise is used to create a new promise object, and then we are passing a function inside the new Promise,whateever written after new ovr here it is written Promise so we can write anything in place of promise no, Here, Promise is not a placeholder that you can replace with anything. It is the constructor for the Promise object. The function you pass to it is the executor function, which takes resolve and reject functions as arguments. The executor function is called immediately by the Promise implementation, and it runs before the Promise constructor even returns the created object. The resolve and reject functions, when called, resolve or reject the promise, respectively. So, the executor function is where you perform the asynchronous operation, and when it's done, you call resolve or reject to resolve or reject the promise. The setTimeout function is used to simulate an asynchronous operation that takes 3 seconds to complete. After 3 seconds, the resolve function is called with the value "Order Id". The then method is used to handle the value returned by the promise object. When the promise is resolved, the function inside then is called with the value "Order Id". So, the output will be "Order Id" after 3 seconds.


// in call back function we pass callback function but in promise we attach the function to the promise object
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
//first let me explai what does .then does, so .then is a method which is used to handle the value returned by the promise object, so when the value is returned by the promise object then it will call the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method, so now we can use the value returned by the promise object inside the function inside the .then method, so now we can proceed to payment using the order id, so this is how we can use promises to handle asynchronous operations, so this is what .then does, so know lets see what does resolve does, so resolve is a function which is used to resolve the promise object, so when the value is returned by the promise object then it will call the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method, so now we can use the value returned by the promise object inside the function inside the .then method, so now we can proceed to payment using the order id, so this is how we can use promises to handle asynchronous operations, so this is what .then does, so know lets see what does resolve does, resolve basically calls the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method



So, to clarify, resolve doesn't call the function inside the then method. Instead, it triggers the execution of the then method, and the value passed to resolve is then passed as an argument to the callback function inside then.

The .then method in a Promise is used to attach callbacks that will be executed when the promise is successfully resolved. It allows you to handle the result of an asynchronous operation or the value that a promise eventually fulfills with


// so let me explain with the help of an example by writing all the name like promise, then, function, orderId, proceedToPayment, createOrder, cart, so that you can understand that what is happening over here, so createOrder is a function which is used to create an order and it takes cart as an argument and then it will return a promise object, so createOrder(cart) will return a promise object and then we are attaching a function to the promise object using then method, so when the value is returned by the promise object then resolve( when used ) will call the function inside the then method and then it will pass the value returned by the promise object to the function inside the then method, so now we can use the value returned by the promise object inside the function inside the then method, so when the order is created then it will call the function inside the then method and then it will pass the order id to the function inside the then method and then we can use the order id inside the function inside the then method and then we are passing the order id to the proceedToPayment function, so now we can proceed to payment using the order id, so this is how we can use promises to handle asynchronous operations

// three states of promise object are pending, resolved, rejected

// const GITHUB_API_URL = "https://api.github.com/users/alakhdeep";
// const user = fetch(GITHUB_API_URL);
// console.log(user);
//so in this example when doing console.log(user) then in the console promise state is coming pending because fetch returns promise so as js works very fast so const user line will be executed and at that time it will be in the pending state thats why it has printed poending but later on after few sec it will be resolved and then it will print the data of the user in the console log basically it will print the response of the fetch api , promise state resolved and value will be the response of the fetch api

//   promise objects are immutable, so once a promise object is resolved or rejected, it cannot be changed. This is why the promise object is in a pending state when it is created and then transitions to either resolved or rejected. The value of the promise object is set when it is resolved or rejected, and it cannot be changed after that.

//so in callback function there is problem of callbackhell
// so in promise there is no problem of callback hell
// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(paymentId){
//          showorderSummary(paymentId,function(summary){
//                  updateWalletBalance();
//          })
//     })
// })
// so this is callback hell, where createOrder is dependent on proceedToPayment and proceedToPayment is dependent on showorderSummary and showorderSummary is dependent on updateWalletBalance,
//  so we can use promises to handle these asynchronous operations, basically promise chaning is used to handle multiple promises at the same time

//promise chain is used to handle multiple promises at the same time


// const promise = createOrder(cart);
// promise.then(function (orderId) {
//      proceedToPayment(orderId);
// });
// createOrder(cart)
// .then(function (orderId) {
//      proceedToPayment(orderId);
// });

// we can write code in these two manners to handle the asynchronous operations using promises and promise chaining

// createOrder(cart)
// .then(function (orderId) {
//      proceedToPayment(orderId);
// });
// .then(function (paymentId) {
//      showorderSummary(paymentId);
// });
// .then(function (summary) {
//      updateWalletBalance();
// });
//so let me do the dry run of the code in depth so createOrder(cart) will return a promise object and then we are attaching a function to the promise object using then method, so when the value is returned by the promise object then resolve( when used ) will call the function inside the then method and then it will pass the value returned by the promise object to the function inside the then method, so now we can use the value returned by the promise object inside the function inside the then method, so when the order is created then it will call the function inside the then method and then it will pass the order id to the function inside the then method and then we can use the order id inside the function inside the then method and then we are passing the order id to the proceedToPayment function, so now we can proceed to payment using the order id, so this is how we can use promises to handle asynchronous operations, so this is what .then does, so know lets see what does resolve does, resolve basically calls the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method

// createOrder(cart)
// .then(function (orderId) {
//      return proceedToPayment(orderId);
// });
// .then(function (paymentId) {
//      return showorderSummary(paymentId);
// });
// .then(function (summary) {
//      return updateWalletBalance();
// });

//so why we use return over here, so we use return over here because we want to pass the value returned by the promise object to the next then method, so when the value is returned by the promise object then resolve( when used ) will call the function inside the then method and then it will pass the value returned by the promise object to the function inside the then method, so now we can use the value returned by the promise object inside the function inside the then method, so when the order is created then it will call the function inside the then method and then it will pass the order id to the function inside the then method and then we can use the order id inside the function inside the then method and then we are passing the order id to the proceedToPayment function, so now we can proceed to payment using the order id, so this is how we can use promises to handle asynchronous operations, so this is what .then does, so know lets see what does resolve does, resolve basically calls the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method

// we can write this code like this also 
// createOrder(cart)
// .then(orderId) =>  proceedToPayment(orderId));
// .then(paymentId) => showorderSummary(paymentId));
// .then(summary) => updateWalletBalance(summary);
// so this is the arrow function way of writing the code and this is the most concise way of writing the code

// 2nd example :
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved");
//   }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 resolved");
//   }, 3000);
// });
//promise1.then((result) => {
//   console.log(result);
//   return promise2;
// }).then((result) => {
//   console.log(result);
//   return promise3;
// }).then((result) => {
//   console.log(result);
// });



// 19) Creating promise, chaining, error handling

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
// .then(function (orderId) {
//      console.log(orderId);
//      return orderId;
// })
// .catch(function (err) {
//     console.log(err.message);
// });
// .then(function (orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function (paymentId) {
//     console.log(paymentId);
// })
// .catch(function (err) {
//    console.log(err.message);    
// })
// .then(function (orderId) {
//     console.log("No matter what happens, I will be executed");
// });

// function createOrder(cart) {
// const pr = new Promise(function (resolve, reject) {
//       create order
//       validate the cart
//       orderid
//      if(!validateCart(cart)){
//          const err = new Error("Cart is not valid");
//      reject(err);
//     }
//      const err = new Error("Cart is not valid");
//      reject(err);
// const orderId = "123";
//  if (orderId) {
//      setTimeout(function () {
//          resolve(orderId);
//      }, 3000);
//  }
//});
// return pr;
// }

// function proceedToPayment(orderId) {
// return new Promise(function (resolve, reject) {
//      resolve("Payment Successfull");
// });
// }
// function validateCart(cart) {
//      return false;
// }

// let me do the dry of the code at differnet edge cases in depth so createOrder(cart) will return a promise object and then we are attaching a function to the promise object using then method, so when the value is returned by the promise object then resolve( when used ) will call the function inside the then method and then it will pass the value returned by the promise object to the function inside the then method, so now we can use the value returned by the promise object inside the function inside the then method, so when the order is created then it will call the function inside the then method and then it will pass the order id to the function inside the then method and then we can use the order id inside the function inside the then method and then we are passing the order id to the proceedToPayment function, so now we can proceed to payment using the order id, so this is how we can use promises to handle asynchronous operations, so this is what .then does, so know lets see what does resolve does, resolve basically calls the function inside the .then method and then it will pass the value returned by the promise object to the function inside the .then method


//20 b)  Promise APIs + Interview Questions

// Promise.all, Promise.allSettled,, Promise.race, Promise.any

// promise apis are used to handle multiple promises at the same time
// Promise.all
// The Promise.all method takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. If any of the promises in the array is rejected, the Promise.all promise is rejected immediately and also lets say there are three proises in the array and the first promise is rejected then the Promise.all promise is rejected immediately, so this is how Promise.all works and also one thing that lets say 1st promise take 3 sec to resolve and 2nd promise take 4 sec to resolve and 3rd promise take 5 sec to resolve then the Promise.all promise will take 5 sec to resolve because it will take the time of the longest promise to resolve, so this is how Promise.all works one more thing is that the order of the promises in the array will be maintained in the results array, this means that the first element of the results array will be the resolved value of the first promise in the array, the second element of the results array will be the resolved value of the second promise in the array and so on, so this is how Promise.all works

//for example :
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved");
//   }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 resolved");
//   }, 3000);
// });
// const promises = [promise1, promise2, promise3];
// Promise.all(promises).then((results) => {
//   console.log(results);
// });

// In this example, we have three promises (promise1, promise2, and promise3) that resolve after different intervals. We use Promise.all to wait for all of them to resolve, and then we log the results to the console. The results array will contain the resolved values of all the promises in the same order as the original promises array.

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("P1 success");
//     },3000)
// });
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("P2 Error");
//     },4000)
// });
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("P3 success");
//     },1000)
// });
// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
//in this example p1 is taking 3 sec to resolve and p2 is taking 4 sec to resolve and p3 is taking 1 sec to resolve so the promise will take 4 sec to resolve because it will take the time of the longest promise to resolve and the value will be the value of the first settled promise to resolve, but over here p2 is rejected so the promise will be rejected and the value will be the error message of p2 after 4 sec, so this is how Promise.all works


// Promise.allSettled: The Promise.allSettled method takes an array of promises and returns a single promise that resolves when all of the promises in the array have settled (either resolved or rejected). The resulting promise will always be resolved, and the results array will contain an object for each promise with the status and value or reason of the promise. This is useful when you want to wait for multiple asynchronous operations to complete, regardless of whether they are successful or not.
// so lets say there are three promises p1,p2,p3 and p1 is resolved and p2 is rejected and p3 is resolved then the Promise.allSettled promise will be resolved and the results array will contain an object for each promise with the status and the value will be val1, error message, val3, so this is how Promise.allSettled works

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("P1 success");
//     },3000)
// });
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("P2 Error");
//     },4000)
// });
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("P3 success");
//     },1000)
// });
// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
//in this example p1 is taking 3 sec to resolve and p2 is taking 4 sec to resolve and p3 is taking 1 sec to resolve so the promise will take 4 sec to resolve because it will take the time of the longest promise to resolve and the value will be the value of the first settled promise to resolve, but over here p2 is rejected so the promise will be resolved and the value will be an array of objects for each promise with the status and the value will be val1, error message, val3, so this is how Promise.allSettled works

// [
//   { status: 'fulfilled', value: 'P1 success' },
//   { status: 'rejected', reason: 'P2 Error' },
//   { status: 'fulfilled', value: 'P3 success' }
// ]
//and the output is coming after 4 sec becuase it will take the time of the longest promise to resolve and the value will be the value of the first settled promise to resolve, but over here p2 is rejected so the promise will be resolved and the value will be an array of objects for each promise with the status and the value will be val1, error message, val3, so this is how Promise.allSettled works

// promise.race : The Promise  method takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. The resulting promise will have the same status and value or reason as the first promise in the array to settle. This is useful when you want to wait for the first asynchronous operation to complete, regardless of whether it is successful or not.
// so lets say there are three promises p1,p2,p3 of promise.race and p1 takes 3 sec to resolve and p2 takes 1 sec to resolve and p2 takes 1 sec to resolve then the promise will be resolved after 1 sec and the value will be the value of the first settled promise to resolve, so basically this is a race whichever will resolve first will be the value of the promise

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("P1 success");
//     },3000)
// });
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("P2 success");
//     },1000)
// });
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("P3 reject");
//     },5000)
// });
// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
//promise.race , race karta hai mtb jho bhi kam time letta hai usse yehh print karra detta hai that's it, abh agar vo kam time walla reject hoo raha hoo yaa phir resolve hoo raha hoo toh bhi yehh usse print karra detta hai.

// let say if p2 is rejected then the promise will be error messzage of p2, as the first promise to settle will be the value of the promise and this is how promise.race works and also one thing that lets say 1st promise take 3 sec to resolve and 2nd promise take 4 sec to resolve and 3rd promise take 5 sec to resolve then the promise will take 3 sec to resolve because it will take the time of the shortest promise to resolve, it just give the shortest time to resolve the promise.

// Promise.any: The Promise.any method takes an array of promises and returns a single promise that resolves as soon as one of the promises in the array resolves. If all of the promises in the array are rejected, the Promise.any promise is rejected with an AggregateError containing the reasons of all the rejections. This is useful when you want to wait for the first successful asynchronous operation to complete, regardless of whether the other promises are successful or not.

//promise.any first settled success ka wait karta hai mann lo 3 promises hai p1,p2,p3 and mann lo p1 3 sec mai reject hoo jatta hai , p2 1 sec mai reject hoo jatta hai and p3 5 sec mai resolve hotta hai tho yehh p3 ko print karra degga yehh error walle ko ignore kar detta hai lekin agar tino hii reject hoo jatte hai toh yehh error message print karra degga, so this is how promise.any works
// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("P1 success");
//     },5000)
// });
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("P2 reject");
//     },2000)
// });
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("P3 reject");
//     },1000)
// });
// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
//output 
// P1 success

// so lets say there are three promises p1,p2,p3 of promise.any and p1 takes 3 sec to resolve and p2 takes 1 sec to reject and p3 takes 2 sec to resolve then the promise will be resolved after 1 sec and the value will be the value of the first settled promise to resolve, so basically we will get the value of the first settled promise to resolve, so over here we will get p3 value as it is the first settled promise to resolve, so this is how promise.any works and also one thing that lets say 1st promise take 3 sec to resolve and 2nd promise take 4 sec to resolve and 3rd promise take 5 sec to resolve then the promise will take 1 sec to resolve because it will take the time of the shortest promise to resolve, it just give the shortest time to resolve the promise.



// difference between promise.any and promise.race is that promise.any will resolve as soon as one of the promises in the array resolves and if all of the promises in the array are rejected, the Promise.any will see another promise that if second promise is resolve with less time than other promise then it will give that promise but if all of the promises in the array are rejected, the Promise.any promise is rejected with an AggregateError containing the reasons of all the rejections, and in promise.race we basically race the promises and the first promise to settle will be the value of the promise and either that promise is rejected or resolved we get the value of that promise, so this is the difference between promise.any and promise

//21)  Async Await

// Async/Await is a new way to write asynchronous code in JavaScript. It is built on top of promises and allows you to write asynchronous code that looks synchronous. It is a syntactic sugar for promises, and it makes asynchronous code easier to read and write.
// async keyword is used to define an asynchronous function, and await keyword is used to wait for a promise to resolve. The await keyword can only be used inside an async function, and it pauses the execution of the async function until the promise is resolved. This allows you to write asynchronous code that looks synchronous, making it easier to read and write.

// async is a keyword that is used before a function to create a async function

//async function always return a promise, remeber promise object 
// async function getData(){
//      return "Namaste";
// }
// either you written a promise from this function but if you don't return a promise from this function and if you are returning a value then this async function will automatically wrap the value in a promise


// async function getData(){
//      return "Namaste";
// }
// const data = getData();
// console.log(data)
// data.then((res)=>console.log(res));
//so in data, promise will be returned, so we can do 
// .then method on data promise  
//output of res is: Namaste because in response we get the namaste only, remember this line 

// const p1 = new Promise((resolve,reject) =>{
//         resolve("P1 success");
// });

// so usually promise resolve and in that it passes message, after then , .then method is being called then we pass the value that came from resolve inside the function, so that is why over here whe we are returning Namaste so it is coming under promise object but insidly it is working with as this response() things like then we are using data.then((res)=>console.log(res)); this line so response usually triggered .then method and remeber response don't contain promise it only contain message so that's why we get response message that is Namaste in data.then((res)=>console.log(res)); though in data console we will get the promise

// example of promise with async await

// const p = new Promise((resolve,reject) =>{
    // resolve("P1 success");
// });
// async function getData(){
    // return p;
// }
// const data = getData();
// data.then((res)=>console.log(res));

// so lets dry run this code, so in data, promise will be returned, so we can do .then method on data promise, so in response we get the promise only, so that is why over here when we are returning p so it is coming under promise object but insidly it is working with as this response() things like then we are using data.then((res)=>console.log(res)); this line so response usually triggered .then method and remeber response don't contain promise it only contain message so that's why we get response message that is P1 success in data.then((res)=>console.log(res)); though in data console we will get the promise
// different between the above two programs is only syntax but we are getting promise object in both the cases

// example of  async await, async and await are used to handle the promises in a better way 


// const p = new Promise((resolve,reject) =>{
//     resolve("P1 success");
// });
// async function getData(){
//     const val = await p;
// }
// getData();
//remeber this line that you will use await keyword infront of the promise.
//remember await is a keyword which will only be used inside the async function and we write await it infront of promise and it will wait for the promise to resolve and then it will store the value of the promise in the variable, so in this case it will store the value of the promise in the val variable, so this is how we can use async and await to handle the promises in a better way

// const p = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P1 success");
//   },10000)
// });

// function getData(){
//   p.then((res)=> console.log(res));
//   console.log("Hello");
// }
// getData();
// so here come interesting thing that what will be printeed first in the console log, so in the console log Hello will be printed first and then P1 success will be printed, so this is how we can use promises to handle asynchronous operations, so this is what .then does.
//   p.then((res)=> console.log(res));
//  on this line JS Engine will not wait promise to resolve, it will go to next line and print Hello and then after 10 sec it will print P1 success, so this is how we can use promises to handle asynchronous operations, so this is what .then does.

// const p = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P1 success");
//   },10000)
// });

// async function getData(){
//   const val = await p;
//   console.log("Hello");
//   console.log(val);
// }
// getData(); 

//so in this case due to await the program will not go below , basically it will wait for the promise to resolve and then it will go to the next line, so in this case Hello will be printed first and then P1 success will be printed, but await stop the code to go below, so this is how we can use async and await to handle the promises in a better way, our JS Engine waits for the promise to resolve and then it will go to the next line, it will only go to the next line when the promise is resolved but in above program it will not wait for the promise to resolve and it will go to the next line because we are using .then method, and also we are not using async and await in the above program, so this is how we can use async and await to handle the promises in a better way


// const p = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P1 success");
//   },10000)
// });

// async function getData(){
//   const val = await p;
//   console.log("Hello");
//   console.log(val);

//   const val2 = await p;
//   console.log("Hello2");
//   console.log(val2);
// }
// getData();
// so in this case basically Hello will be printed then P1 success then Hello2 then P1 success, so basically program both await is running parallely, so this is how we can use async and await to handle the promises in a better way, so this is how we can use async and await to handle the promises in a better way, it will not work like that that first after 10 sec Hello and P1 success will be printed and then after 10 sec Hello2 and P1 success will be printed,so it will not take 20 sec to complete the program.

// so getData 
//call Stack
// so first off all call stack is empty but later getData will be pushed to the call stack and then val will be declared and then await p will be pushed to the call stack and then it will wait for the promise to resolve and then it will go to the next line and then Hello will be printed and then P1 success will be printed and then val2 will be declared and then await p will be pushed to the call stack and then it will wait for the promise to resolve and then it will go to the next line and then Hello2 will be printed and then P1 success will be printed, so this is how the call stack works in this case, so this is how we can use async and await to handle the promises in a better way

// so getData execution will suspend when it will reach to the await keyword and then it will wait for the promise to resolve and then it will go to the next line, and after then after 5 sec getData will again come in call stack it will start executing from where it came, so it will again suspend the execution because of 2nd await keyword and then it will wait for the promise to resolve and then it will go to the next line, so this is how the call stack works in this case.


// const p1 = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P1 success");
//   },5000)
// });

// const p2 = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P2 success");
//   },10000)
// });

// async function getData(){
//   const val = await p1;
//   console.log("Hello");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Hello2");
//   console.log(val2);
// }
// getData();
// so in this code we get first after 5sec Hello will be printed then P1 success will be printed, and after 10 sec Hello2 will be printed and then P2 success will be printed so this line JS Engine willl wait is not true


// const p1 = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P1 success");
//   },10000)
// });

// const p2 = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve("P2 success");
//   },5000)
// });

// async function getData(){
//   const val = await p1;
//   console.log("Hello");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Hello2");
//   console.log(val2);
// }
// getData();
// so in this code we get first after 10sec Hello will be printed then P1 success will be printed, and after 5 sec Hello2 will be printed and then P2 success will be printed so this line JS Engine willl wait is not true so basically Hello2 and val2 will already being executed but it will not print because Hello and val are taking 10sec to print 

// const API_URL = "https://api.github.com/users/alakhdeep";

// async function getData(){
//     const data = await fetch("API_URL");
//     const jsonValue = await data.json()
// }
// getData();


// How does fetch works?
// fetch returns a promise (response object), and so we usually add await indfront of promise or we can use .then method on the fetch promise.
// Fetch when resolved then it will return the response object and then we can use .json method on the response object to get the data from the response object, so this is how we can use fetch to get the data from the api, so in data we will get the response object and we will convert into json and remember data.json() is also a promise so we can use .then method on the data.json() promise to get the data from the response object 

// In JavaScript, data.json() is a promise because the json() method returns a promise that resolves with the parsed JSON data. The fetch API is designed to work with asynchronous operations, and the json() method is no exception.

// Here's a breakdown of how it works:

// When you call fetch("API_URL"), it returns a promise that represents the response from the server.

// The json() method is part of the Response interface, and when you call data.json(), it starts the process of asynchronously reading the body of the response as JSON.

// The json() method returns a new promise. This promise is in a pending state until the JSON data is fully read and parsed.

// Once the JSON data is successfully parsed, the promise is resolved with the parsed JSON data.

// If there is an issue parsing the JSON (for example, if the response body is not valid JSON), the promise is rejected with an error.


// fetch().then(response => response.json()).then(data => console.log(data));
// we also use this type of code also so it is similar to upper code, so the fetch function return promise so that's why we used .then after thrn we are converting response to json using .json and then .json again return promise so then we are fetching promise object using .then and then we are getting out data in data varibale

// so in this code we are using .then method on the fetch promise to get the response object and then we are using .json method on the response object to get the data from the response object, so this is how we can use fetch to get the data from the api, so in data we will get the response object and we will convert into json and remember data.json() is also a promise so we can use .then method on the data.json() promise to get the data from the response object

//error handling 
//so here we will use try catch to handle error methods


// const API_URL = "https://api.github.com/users/alakhdeep";

// async function getData(){
// try {
//     const data = await fetch("API_URL");
//     const jsonValue = await data.json()
// } catch (error) {
//    console.log(error);
// }
// getData();


//anpther way of writing the code is
// const API_URL = "https://api.github.com/users/alakhdeep";

// async function getData(){
// try {
//     const data = await fetch("API_URL");
//     const jsonValue = await data.json()
// } 
// getData().catch ((error) => console.log(error));
//both async await and promise are good to use, it's just async await is more readable and easy to write, so it is better to use async await to handle the promises in a better way, so this is how we can use async and await to handle the promises in a better way


//22) this keyword
//(1) //this in global space
//  console.log(this); //global object
//  console.log(this === window); //true
// this is window object in global space

// function x(){
// console.log(this);
// }
// inside function this is not window object
// this is undefined in function

// this keyword works differently strict mode and non strict mode
//if the value of this keyword is undefined or null then this keyword will be replaced with global object , only in non strict mode
// in strict mode this keyword will be undefined
//if the interview ask you that what will be the value of this keyword inside the function then you will say that it will be undefined but because js has this substituion rule so it (this) will be replaced with global object if you will not used strict mode

// (2) this keyword value depend on how the function is called (window)

//if we call the function using window.x() then this keyword will be window object
// if we call the function using x() then this keyword will be window object in strict mode and undefined in non strict mode

//(3) this inside a object method
// const user = {
//     name: "john",
//     courseCount: 4,

// difference between function and a method is that method is a function which is inside an object
// for example : function x(){} this is a function
// const user = {
//     name: "john",
//     courseCount: 4,
//     getCourseCount: function(){
//         console.log("line 1", this);
//         function sayHello(){
//             console.log("hello");
//             console.log("line 2", this);
//         }
//         sayHello();
//     }
// }
// user.getCourseCount();
// this is a method
// getCourseCount is the mehtod of user object
// this is user object in line 1 and this is window object in line 2 because this is a function and this is a global object in non strict mode and undefined in strict mode and this is a function so this will be window object in non strict mode and undefined in strict mode and this is a function so this will be window object in non strict mode and undefined in strict mode

// const alakh ={
//      a: 10,
//      x:function(){
//        console.log(this);
//      }
// }
// obj.x();
// inside obj , log will print  alakh object, so whenever you are inside the method the value of this keyword will be the object itself
// so in console log it will print alakh object
// {
//      a: 10,
//      x:function(){
//        console.log(this);
//      }
// }

// 4) call apply bind
// call, apply and bind are used to change the value of this keyword
// const student = {
//     name: "alakh",
//     printName: function(){
//         console.log(this.name);
//     }
// }
// student.printName();

// const student2 = {
//     name: "rahul",
// }
// student.printName.call(student2); //value of this keyword will be student2 object so it will print rahul in console log, basically we are borrowing the method from student object and using the data of student2 object so it will print rahul in console log, and this is refering to student2 object, we can point this to as many objects as we want using call method

//(5) this inside arrow function

// const obj = {
//    a: 10,
//    x: function(){
//        console.log(this);
//     }
// }
// this is window object in arrow function because arrow function does not have its own this keyword so it will take the value of this keyword from its parent which is window object in this case so it will print window object in console log in arrow function, also one thing that arrow functions are not method inside an object

// (6) this inside nested arrow function
// const obj2 = {
//     a: 20,
//     x: function(){
//         const y = () => {
//             console.log(this);
//         }
//         y();
//     }
// }
// obj2.x();
// this is obj2 object in nested arrow function because arrow function does not have its own this keyword so it will take the value of this keyword from its parent which is obj2 object in this case so it will print obj2 object in console log in nested arrow function basically over here this prints the value of its parent which is obj2 object becuse it forms lexical enclosed with its parent which is obj2 object in this case
// so this keyword will print this as a object
// {
//     a: 20,
//     x: function(){
//         const y = () => {
//             console.log(this);
//         }
//         y();
//     }
// }

// (7) this inside DOM element => reference to HTML element
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function(){
//     console.log(this);
// })
// this will print the button element in console log
// <button class="btn">Click me</button> in console log
//so the value of this keyword inside the event listener is the element on which the event is attached so here the event is attached on button element so it will print button element in console log, this will the refernece to the HTML element on which the event is attached so here the event is attached on button element so it will print button element in console log.
