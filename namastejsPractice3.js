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

//19) Callback hell
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
