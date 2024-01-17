//15) Trust issue with settimeout
//16) Higher order function
//17) map,filter, & reduce
//18) callback hell
//19) Promises
//20) Creating promise, chaining, error handling
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
// const doubledArray = originalArray.map(num => num * 2);
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

// console.log("Namaste");
// setTimeout(function() {
//     console.log("Javascript");
// }, 5000)

// 2 - Inversion of control
// The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain.
// That process is called inversion of control.

//19)
// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable.
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

// Importance of promise is that we do not loose the control of the program, a promise object is immutable and can be send anywhere without worrying about changes, also it resolves only once either to success or failure.

// const cart = ["shoes","pants","kurta"];
//
// createOrder(cart, function(orderId){
//      proceedtoPayment(orderID);
// });
// //this is the call back function
// now it is the responsibilty of createorder function to create an order and then will call the function function
// but there is a imp issue that is IOC ( inversion of control ),  we have passed this call back function to create order API and now we are sitting back
// relax that at some point of time this createorder function will call function but who knows create order api never call our call back function
// we can't blindly trust the API
//
// const promise = createOrder(cart);
//
// promise.then(function(orderId){
//      proceedtoPayment(orderID);
// })
//
//
// In JavaScript, functions and methods are often used interchangeably, but there is a subtle distinction. A method is a function that is a property of an object. In the case of the .then syntax used with Promises, it is technically a method because it is a function that is a property of a Promise object.
//
//
// // Assume createOrder is a function that returns a Promise and takes a cart as a parameter
// const promise = createOrder(cart);

// // The createOrder function is now executing asynchronously. It may involve operations like
// // making API calls, database queries, or any other asynchronous tasks related to creating an order.

// // Once the asynchronous operation inside createOrder is complete, the Promise is either resolved or rejected.

// // Now, we attach a callback function using .then to handle the resolved value of the Promise.
// promise.then(function(orderId) {
//     // This function will be executed when the Promise is resolved.

//     // Inside this function, we have access to the orderId, which is the resolved value of the Promise.

//     // Now, we call the proceedtoPayment function and pass the orderId as an argument.
//     proceedtoPayment(orderId);

//     // Note: The actual implementation of proceedtoPayment is not provided, but it's assumed to be a function
//     // that takes an orderId as a parameter and handles the payment process.
// });

// // The main thread of execution continues immediately after the promise is created,
// // and it doesn't wait for the asynchronous operation inside createOrder to complete.
// // Instead, it continues with the rest of the code, if any.

// // createOrder(cart) is a function that returns a Promise, initiating an asynchronous operation (e.g., creating an order).
// // promise is a Promise object representing the asynchronous operation triggered by createOrder(cart).
// // .then is used to attach a callback function that will be executed when the Promise is resolved.
// // The callback function receives the resolved value of the Promise, assumed to be an orderId.
// // Inside the callback function, proceedtoPayment(orderId) is called to handle the payment process with the orderId.
// // The main thread of execution continues immediately after creating the Promise, and the callback inside .then will be executed later when the Promise is resolved.
// // Note: The actual behavior might vary based on the implementation of createOrder and the behavior of the asynchronous operation it performs.
// //
// //
// // Callbacks Disadvantages:
// Callback Hell or Pyramid of Doom:

// When dealing with multiple asynchronous operations or nested callbacks, the code structure can become deeply nested, leading to readability issues. This is commonly referred to as "Callback Hell" or the "Pyramid of Doom."

// Example:

// javascript
// Copy code
// asyncFunction1(arg1, function(result1) {
//     asyncFunction2(result1, function(result2) {
//         asyncFunction3(result2, function(result3) {
//             // and so on...
//         });
//     });
// });
// Error Handling:

// Error handling in callback-based code can be challenging. If an error occurs deep within the nested callbacks, it may be difficult to trace and handle effectively.
// Limited Composability:

// Composing and chaining multiple asynchronous operations can be complex and less modular with callbacks.
// Promises Advantages:
// Chaining and Readability:

// Promises provide a more readable and flat structure for handling asynchronous code. The .then method allows you to chain multiple asynchronous operations in a more linear fashion.

// Example:

// javascript
// Copy code
// asyncFunction1(arg1)
//     .then(result1 => asyncFunction2(result1))
//     .then(result2 => asyncFunction3(result2))
//     .catch(error => console.error(error));
// Error Handling:

// Promises have built-in mechanisms for error handling through the .catch method, making it easier to handle errors in a centralized manner.

// Example:

// javascript
// Copy code
// asyncFunction()
//     .then(result => /* handle result */)
//     .catch(error => /* handle error */);
// Promise.all and Promise.race:

// Promises provide utility methods like Promise.all and Promise.race, which make it easier to work with multiple asynchronous operations concurrently.

// Example:

// javascript
// Copy code
// Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()])
//     .then(results => /* handle results */)
//     .catch(error => /* handle error */);
// Transform Callback-Based APIs:

// Promises can be used to transform callback-based APIs into a more modern and readable format.

// Example:

// javascript
// Copy code
// const promisedApiCall = () => {
//     return new Promise((resolve, reject) => {
//         // Callback-based API logic
//         apiCall((error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };
// In summary, while callbacks are a valid mechanism for handling asynchronous code, Promises offer advantages in terms of readability, error handling, and composability. Promises have become a standard in modern JavaScript for managing asynchronous operations, and they serve as a foundation for the even more advanced async/await syntax introduced in ECMAScript 2017.
//
//
//
// fetch function returns promise
// const GITHUB_API = "https://........"
// const user - fetch (GITHUB_API)
// in user we will get the promise object
//
//In the provided code snippet, you are using the fetch function to make an asynchronous request to the GitHub API. The fetch function returns a Promise, and its behavior in terms of being pending, fulfilled, or rejected depends on the completion of the asynchronous operation.

// Here's a breakdown of the Promise lifecycle in this context:

// javascript
// Copy code
// const GITHUB_API = "https://api.github.com/users/username"; // Replace 'username' with an actual GitHub username
// const userPromise = fetch(GITHUB_API);

// // userPromise is now a Promise object.

// // At this point, the Promise is in a pending state because the asynchronous operation (fetching data) is in progress.

// userPromise
//     .then(response => {
//         // If the request is successful (status code 2xx), the Promise is fulfilled.
//         // The 'response' object contains information about the HTTP response.
//         // This doesn't necessarily mean the data is available yet.

//         if (!response.ok) {
//             // If the response status is not okay, reject the Promise.
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // If the response is okay, return the JSON parsed data.
//         return response.json();
//     })
//     .then(userData => {
//         // At this point, the Promise is fulfilled with the JSON-parsed data.
//         // 'userData' contains the actual data retrieved from the API.

//         console.log(userData);
//     })
//     .catch(error => {
//         // If an error occurs at any point in the Promise chain, the Promise is rejected.
//         // The 'error' object contains information about the error.

//         console.error(error);
//     });
// Here's a brief summary:

// Pending State:

// The Promise is in the pending state as soon as fetch is called, and it represents an ongoing asynchronous operation (the HTTP request to the GitHub API).
// Fulfilled State:

// If the HTTP request is successful (status code 2xx), the first .then block is executed, and the Promise is fulfilled. The response.json() method returns another Promise that resolves with the JSON-parsed data.
// Rejected State:

// If an error occurs at any point in the Promise chain (e.g., network error, non-2xx HTTP status), the Promise is rejected, and the .catch block is executed.
// The Promise returned by fetch helps in managing the asynchronous nature of the network request and provides a clean way to handle both successful and unsuccessful outcomes.

//
//
// Promise chain
//
// createOrder(cart)
//  .then(function (ordrId){
//      return proceedToPayment(orderID);
//  })
//  .then(function(paymentInfo){
//      return showOrderSummary(paymentInfo);
//  })
//  .then(function (paymentInfo){
//      return updateWalletBalace(paymentInfo)
//  })
//
// Don't forget to add return
//
