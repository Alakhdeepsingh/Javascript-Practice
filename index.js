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


// let obj = {
//     harry : 90,
//     alakh : 45,
//     jayesh : 23,
//     riti : 67,
//     jassi : 34
// }

// for (let a in obj){
//     console.log(a, obj[a]);
// }
// harry 90
// alakh 45
// jayesh 23
// riti 67
// jassi 34

// for (let b of "Harry"){
//     console.log(b);
// }
// H
// a
// r
// r
// y
// kjbkjbjkbkjjbj


// function one(x,y){
//     let d = x+y;
//     return d;
// }
// let a=10,b=20;
// let c = one(a, b);
// console.log(c);
//Output
//30


//arrow function
// const hello = (x,y)=>{
//     return d = x+y;

// }
// let a=10,b=20;
// let c = hello(a, b);
// console.log(c);
//Output
//30


//strings




//template  literal are backtics instead of quotes to define a string
//backtik  
//string interpolation : we can insert variable directly in backtik using dollar sign
 
// let name = `alakh 'is' "good" boy`;
// console.log(name);
//Output
// alakh 'is' "good" boy

// let boy1 = "hh";
// let boy2 = "gg";
// let sen = `${boy1} is friend ${boy2}`
// console.log(sen)
//Output
// hh is friend gg

// let fruit = 'bana\'na'
// console.log(fruit);
// console.log(fruit.length)
//Output
// bana'na
// 7

//slice start from 2nd index and ends on 3rd index, it will not end on 4th index 
//as we are writing 4 so 4 will not be included

// let name = "alakh";
// let ans = name.slice(2,4);
// console.log(ans);
//Output
// ak

// let name = "alakh don"
// let newname = name.replace("don" , "good person");
// console.log(newname);
//Output
// alakh good person

// let name = "hello "
// let name2 = "jayesh "
// let newname = name.concat(name2 , "good person");
// console.log(newname);
// Output
// hello jayesh good person

// let friend = "    Alakh     "
// console.log(friend.trim())
//if we want to remove the space that is there in alakh then we can do using trim 

//string is immutable means whatever we put function on name , 
//but the value of string will never changed means name will always be "hello"


// console.log("har\"".length)
// 4

// let text = "Hello world, welcome to the universe.";
// text.startsWith("Hello");


// let name = "ALAKH";
// console.log(name.toLowerCase());
// Output
// alakh

// let name = "alakh";
// console.log(name.toUpperCase());
// Output
// ALAKH


// let value = 1000;
// let a = `Please give rs ${value}`
// console.log(a);


//array

let a = [10,20,30,40];
let b = [50,70,6,80];
console.log(a.toString());
console.log(typeof(a));
// 10,20,30,alakh
// object
//array is a type of an object

// console.log(a.join("sdf"))
// 10-20-30-alakh

// console.log(a.pop())
// 40

// console.log(a.push(100));
// console.log(a)
// [ 10, 20, 30, 40, 100 ]

// console.log(a.shift());
// shift remove first element and return that
// console.log(a)
// [ 20, 30, 40 ]

// console.log(a.unshift(200));
//unshift add a new element in an array in the beginnig
// console.log(a)
// [ 200, 10, 20, 30, 40 ]


// console.log(a.delete(2));
// console.log(a)

// console.log(a.concat(a,b));
//concat join the two arrays
// [
//     10, 20, 30, 40, 10,
//     20, 30, 40, 50,  6,
//     70, 80
//   ]

// console.log(b.sort())
// [ 50, 6, 70, 80 ]

// const number = [1,2,3,4,5,6];
// console.log(number.splice(2,1,23));

// const numbe = [1,2,3,4,5,6];
// console.log(numbe.slice(2));
//slice cut a piece from an array
// [ 3, 4, 5, 6 ]

console.log(a.reverse());