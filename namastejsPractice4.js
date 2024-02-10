//22) call, apply, bind
//23) Currying
//24) Prototype and Prototypal Inheritance
//25) event bubbling, capturing aka trickling
//26) Event Delegation in JS
//27) Debouncing
//28) Throttling
//29) Debouncing vs Throttling
//30) CORS
//31) async vs defer
//32) Polyfill for bind method

// 22) call, apply , bind

// let name = {
//     firstName: 'Alakhdeep',
//     lastName: 'Singh',
//     printFullName: function(){
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }
// name.printFullName();
// Alakhdeep Singh

// each and every function has access to this keyword over here the this keyword will point to the name object, so console will print Alakhdeep Singh as output because this.firstName will point to name.firstName and this.lastName will point to name.lastName

// let name={
//      firstName: 'Alakhdeep',
//      lastName: 'Singh',
//      printFullName: function(){
//          console.log(this.firstName + ' ' + this.lastName);
//      }
//}
// name.printFullName();

// let name2 = {
//     firstName: 'Rahul',
//     lastName: 'Kumar'
//      printFullName: function(){
//         console.log(this.firstName + ' ' + this.lastName);
//      }
//};
// name.printFullName();
//so you can see that we have two objects name and name2 and both have same printFullName method, so we have to call the printFullName method for both the objects, which is not good practice to write the same method for each and every object, so we can use call, apply and bind method to solve this problem

// call method

// let name={
//      firstName: 'Alakhdeep',
//      lastName: 'Singh',
//      printFullName: function(){
//          console.log(this.firstName + ' ' + this.lastName);
//      }
//}
// name.printFullName();

// let name2 = {
//     firstName: 'Rahul',
//     lastName: 'Kumar'
//};

// name.printFullName.call(name2);
//so over here we are calling the printFullName method of name object and we are passing name2 object as an argument to the call method, so the this keyword will point to the name2 object and it will print Rahul Kumar as output
// using call method we can borrow the function from one object to another object and use the data of another object so in the above example we are borrowing the printFullName method from name object to name2 object and using the data of name2 object to print the output.
// name.printFullName.call(name2);
// so now this will print Rahul Kumar as output because this keyword will point to name2 object by writing name.printFullName.call(name2);

// let name={
//      firstName: 'Alakhdeep',
//      lastName: 'Singh',
//}
// let printFullName = function(){
//          console.log(this.firstName + ' ' + this.lastName);
// }
// name.printFullName.call(name);

// let name2 = {
//     firstName: 'Rahul',
//     lastName: 'Kumar'
//};

// name.printFullName.call(name2);

// let name={
//      firstName: 'Alakhdeep',
//      lastName: 'Singh',
//}
// let printFullName = function(hometown, state){
//          console.log(this.firstName + ' ' + this.lastName+ ' ' + hometown + ' ' + state);
// }
// name.printFullName.call(name, 'Delhi', 'Delhi');

// let name2 = {
//     firstName: 'Rahul',
//     lastName: 'Kumar'
//};

// name.printFullName.call(name2, 'Pune', 'Maharashtra');

// const a = {
//     name:"alakh",
//     age:20,
// }
// var b = function(state){
//         console.log(this.name, this.city, state);
// }

// const z = {
//     name:"alakhdeeepp",
//     age:23,
// }

// const p = {
//     name:"alp",
//     age:23,
//     city:"kanpur"
// }

// b.call(z,"up");
// b.call(p,"upsc");

//apply method
// difference between call and apply method is that in call method we pass the arguments one by one and in apply method we pass the arguments in the form of array
// let name={
//      firstName: 'Alakhdeep',
//      lastName: 'Singh',
//}
// let printFullName = function(hometown, state){
//          console.log(this.firstName + ' ' + this.lastName+ ' ' + hometown + ' ' + state);
// }
// name.printFullName.apply(name, ['Delhi', 'Delhi']);
// so over here we are passing the arguments in the form of array to the apply method
// const a = {
//     name:"alakh",
//     age:20,
// }
// var b = function(state,pincode){
//         console.log(this.name, this.city, state, pincode);
// }

// const z = {
//     name:"alakhdeeepp",
//     age:23,
// }

// const p = {
//     name:"alp",
//     age:23,
//     city:"kanpur"
// }

// b.apply(z,["up",208022]);
// b.apply(p,["upsc",208922]);

//bind method
// let name={
//      firstName: 'Alakhdeep',
//      lastName: 'Singh',
//}
// let printFullName = function(hometown, state){
//          console.log(this.firstName + ' ' + this.lastName+ ' ' + hometown + ' ' + state);
// }
// let printMyName = printFullName.bind(name, 'Delhi', 'Delhi');
// console.log(printMyName);
//so in console.log we will get the printFullName method
// function(hometown, state){
//          console.log(this.firstName + ' ' + this.lastName+ ' ' + hometown + ' ' + state);
// }
// printMyName();
// so over here we are binding the printFullName method to the name object and we are passing the arguments to the bind method, so the output will be the function printFullName with the arguments passed to the bind method,
//bind method does not call the function, it just returns the copy of the function with the arguments passed to the bind method, so we have to call the function separately after binding the function to the object
