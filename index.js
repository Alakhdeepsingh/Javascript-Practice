// let a = 10;
// console.log(a);
//Output
// 10
// a = "Alakh";
// console.log(a);
//Output
// Alakh
//this shows js is dynamically language because we can change it datatype like first it was number the it is string in it's runtime as we have changed a=10 to a="Harry"

// variables names can start with $,_,alphabets
// let $ac = 5;
// console.log($ac);
//Output //5
// let _s = 19;
// console.log(_s);
//Output  //19


// let 5as = 3;
// console.log(5as);
//Output  //SyntaxError: Invalid or unexpected token
// variables names cannot start number 

// let var = 5;
// console.log(var);
//Output //SyntaxError: Unexpected token 'var'
// variables names cannot start with reserved words of js


// let a = 10;
// var b = "harry";
// {
//     let a = 5;
//     console.log(a);
// }
// console.log(a);
//Output
// 5
// 10
//var is globally scoped 


// var a = 10;
// var b = "harry";
// {
//     let a = 5;
//     console.log(a);
// }
// console.log(a);
//Output
// 5
// 10
// var is global scope, let and const are blocked scope


// let a = 10;
// var b = "harry";
// {
//     var a = 5;
//     console.log(a);
// }
// console.log(a);
//Output
// 5
// 5

// var a = 10;
// var a = "Harry";
// console.log(a);
//var can be redeclared

// let a = 10;
// let a = 20;
// console.log(a);
//Output
//SyntaxError: Identifier 'a' has already been declared
// let Cannot redeclare block-scoped variable that's why let is good than var
//because let's say in new line if I write again let a = 30 then this will be wrong though code will work but
//again redeclaration of same variable is wrong



//primitive datatype type
//nn bb ss u
//null number bigint boolean string symbol undefined

//non primitve datatype
//object


// let a = null;
// let b = 345;
// let c = true;
// let d = BigInt("567")+BigInt("3")
// let e = "Harry"
// let f = Symbol("I am nice")
// let g;
// console.log(a,b,c,d,e,f,g);
//Output
// null 345 true 570n Harry Symbol(I am nice) undefined

//if we want to know the datatype of different variables then we will use typeof
// console.log(typeof a,typeof b,typeof c, typeof d,typeof e,typeof f,typeof g);
//Output
// object number boolean bigint string symbol undefined


// const item = {
//     "Harry" : true,
//     "Shubh" : false,
//     "Lovisjnh" : 67,
//     "Rohan" : undefined
// }
// console.log(item["Shubh"]);
//Output
// false

// console.log(item["Shu"]);
//Output
// undefined
//since no object name is shu so the value will not be there so we get undefined as output


//Practice set 1

// let a = "alakh";
// let b = 18;
// console.log(a+b);
// console.log(typeof (a+b));
//Output
// alakh18
// string
// yaad rakna ki string mai number add kar rahe hai matlab ki a mai b add kar rahe hai isliye string type print hoo raha hai a+b karne parr

// const h = {
//     alakh : "hello",
//     section : 1
// };
//alakh is key and hello is value

// h['friend']="Shubham"
// to add value in object we have written in above line

// h['name']="Alakh"
// changing the value of name in object h
// h[alakh] = 3;
// console.log(h);

// { alakh: 'hello', section: 1, friend: 'Shubham', name: 'Alakh' }

//though h is const but then also we can change inside values of different keys because
//object h is reference to alakh and section , though we cannot change the value of hai


// const dict = {
//     appreciate : "hello",
//     alakh : "light"
// }
// console.log(dict.alakh);
// console.log(dict['alakh']);
//there are basicaly two ways to access the alakh using this object dict
//Output
// light




// let a = prompt("Hey whatsupp?")
// console.log(typeof a);
//Output
//String  // a is a type of string
// a = Number.parseInt(a); //converting the string to number
// console.log(typeof a);
//Output
// number
// if(a>0){
//     alert("This is a valid age")  //alert tell us something
// }
//Output
// This is a valid age



// let age = 29;
// if(age>=10 && age<=20){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }
//Output bad


// let num = 13;
// if(num%2==0 || num%3==0){
//     console.log("divisible");
// }
// else{
//     console.log("not divisible")
// }
// Output 
// not divisible

// let age = 10;
// if(age>18){
//     console.log("you can drive");
// }
// else{
//     console.log("you cannot drive");
// }
// (age==10)?console.log('Yes'):console.log('No');
// Output 
// you cannot drive
// Yes


//Program to add first n natural numbers
// const prompt = require("prompt-sync")({sigint: true});
// let sum = 0;
// let n = prompt("Entern the value of n")
// n=Number.parseInt(n)
// for(let i = 0; i<n; i++){
//     sum += (i+1)
// }
// console.log(sum);
// Output  
// Entern the value of n5
// 15



// if we want keys and values in object then we can use for in loop
// let obj = {
//     harry : 90,
//     alakh : 45,
//     jayesh : 23,
//     riti : 67,
//     jassi : 34
// }

// for (let a in obj){
//     console.log(a);
// }
// // Output 
// harry
// alakh 
// jayesh
// riti  
// jassi


let obj = {
    harry : 90,
    alakh : 45,
    jayesh : 23,
    riti : 67,
    jassi : 34
}

for (let a in obj){
    console.log(a, obj[a]);
}
// harry 90
// alakh 45
// jayesh 23
// riti 67
// jassi 34

for (let b of "Harry"){
    console.log(b);
}
// H
// a
// r
// r
// y

