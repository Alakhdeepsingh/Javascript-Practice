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
//object h is reference to alakh and section , though we cannot change the value of h


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


// let age = prompt("hello");
// // let age = 29;
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


// let arr = [1,[1,3],[4]];



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

// let a = [10,20,30,40];
// let b = [50,70,6,80];
// console.log(a.toString());
//toString coverts number to string
// console.log(typeof(a));
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

const number = [1,2,3,4,5,6];
console.log(number.splice(2,1,23));


// const numbe = [1,2,3,4,5,6];
// console.log(numbe.slice(2));
//slice cut a piece from an array
// [ 3, 4, 5, 6 ]

// console.log(a.reverse());
// [ 40, 30, 20, 10 ]

// let num = [3,4,5,6]
// num.forEach((element)=>{
//     console.log(element*element);
// })
// 9
// 16

// 25
// 36

//we use foreach jabh hamme kisi array ke existing element
//parr changes karne hoye


//map
//create a new array by performing some operations on each array element
// let arr = [1,2,3];
// let ae = arr.map((value)=>{
//     console.log(value);
//     return value + 1
// })
// console.log(ae);
// 1
// 2
// 3
// [ 2, 3, 4 ]


//filter
// let arr2=[1,2,3,4,5,6,7,8];
// let ee = arr2.filter((value)=>{
//     return value<6
// })
// console.log(ee)
// [ 1, 2, 3, 4, 5 ]

let w = [100,20,3,4];
// let aw = prompt("Number");
// aw = Number.parseInt(aw);
// w.push(aw)
// console.log(w)
//Output
// Number344
// [ 1, 2, 3, 4, 344 ]

// let aa = w.filter((value)=>{
//     return value%10;
// })
// console.log(aa);
//Output
// [ 3, 4 ]


//alert
//confirm
//prompt


//dom
//it is a tree like structure, html ke page ko object banna diya jatta hai and usse dom bol dette hai 

// document.body 
//we are trying to access html body that is js object



// console.log(document.body.firstChild);
//yehh keval ekk node ko uthayega
// console.log(document.childNodes[0]);
//yehh sarre nodes ko uthayega

// console.log(document.body.lastChild);
// console.log(document.childNodes.length-1); 
// console.log(document.body.childNodes);
// console.log(document.hasChildNodes());
//it will check that kya child nodes hai and return true and false


// let b = document.body;
// console.log(b.firstChild)
// console.log(b.firstElementChild)


// console.log(document.body.firstChild)
//this will give us any every element of html like comment and text etc 
// console.log(document.body.firstElementChild)
//this will give us specific element of html like head body  etc 

// let t = document.body.firstElementChild.firstElementChild
// console.log(t);

// console.log(t.row)
// console.log(t.caption) 
// console.log(t.tHead)



// let age = prompt("Enter age");
// if(age>18){
//     alert("you can drive")
// }
// document.body.style.background = green;
 
// const [a ,b] = [1,2,3,4,5]
// console.log(a)
// console.log(b)
//Output
// 1
// 2

// console.log(parseInt("alakh"));
// NaN : Not-a-Number

// let c = document.getElementById("firstcardtitle")
// c.style.color = "pink"

// let cs = document.querySelectorAll(".card-title")
// cs[0].style.color = "green"
// cs[1].style.color = "yellow"

// let z = document.getElementsByTagName("a")
// z[0].style.color = "blue"





// let x1 = document.getElementsByTagName('span')[0]
// console.log(x1)
// let y = document.getElementsByTagName('span')[0]
// console.dir(y)
// console.log(document.body.firstChild.nodeName) 
// console.log(document.body.firstElementChild.nodeName)

// first.innerHTML 
// first.innerHTML = "<i>hey I am italic</i>" 
// first.outerHTML 
// first.outerHTML = "<div>hey</div>"
// document.body.firstChild.data 
// console.log(document.body.textContent)
// first.hidden = false


//matches
// matches will check that is that class is there in that particular element
// let id1 = document.getElementById("id1")
//Output
{/* <div id="id1" class="box">This is an element</div> */}
// console.log(id1)
// console.log(id1.matches(".box"))
//Output
//true

//closest
//contains


//innerHTML
//if we want to take out html part then we will use innerhtml
// console.log(id1.innerHTML);
//Output
// This is an element

//outerHTML
//in outerHTML whole htl comes means full innerhtml+the element itself
// console.log(id1.outerHTML);
//Output
{/* <div id="id1" class="box">This is an element</div> */}

// we can set value also in the
// id1.outerHTML = "<div>Hello</div>"
// console.log(id1.outerHTML);
//Output
{/* <div id="id1" class="box">This is an element</div> */}

//let first = document.getElementById("id1")
//let a = first.getAttribute("class")
//console.log(a);
//Output
//box

// let first = document.getElementById("id1")
// let a = first.hasAttribute("class")
// console.log(a);
//Output
// true

// let first = document.getElementById("id1")
// let a = first.setAttribute("class", "true")
// console.log(a);


//insertAdajacentHTML / Text / Element

// first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterend','<div class="test">afterend</div>');

//classlist



// let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// },5000)
// clearTimeout(a);

// const sum = (a,b,c) => {
//     console.log("Yes i Am" + (a+b+c))
//     a+b
// }
// setTimeout(sum,1000,1,2,7)
//setTimeout mtb iss function ko  1 sec ke badh run kardho

//setInterval mtb iss function ko itne hii 1 yaa any seconds mai run karte hii raho


//events 

// let x = function(e){
//     alert("Helloworld1")
// }
// let y = function(e){
//     alert("Hello world2")
// }
// btn.addEventListener("click",x);

// btn.addEventListener("click",y);

// let a = prompt("What is your fav no");

// if(a =="2"){
//     btn.removeEventListener("click",x)
// }




//callback // asynchronous

// console.log("yoyo")
// setTimeout(function(){
//     console.log("hey")
// },8000)
// console.log("hello")



//call back

//function inside function is call back actually js is synchromous language
//now but due to call back we can do asynchronous inside js 


// function show(a){
//     //this func is call back function
//     console.log("I am Show Function")
// }
// function geeky(callback){
//     var a = 10; 
//     callback(a);
//     console.log("hello")
// }
// console.log("hey1")
// geeky(show);
// console.log("hey")



// setTimeout (function(){
//     console.log("timer");
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }
// function y()
// x(y(){
//     console.log("y");
// });
// y is call back function over here

// const perone = (friend) =>{
//     console.log(`I am busy ${friend}`)
// }
// const pertwo = () =>{
//     console.log("hello")
// }
// perone("friend");
// pertwo();
// I am busy friend
// hello


// y is call back function over here

// const perone = (friend,callfrd) =>{
//     console.log(`I am busy ${friend}`)
//     callfrd();
// }
// const pertwo = () =>{
//     console.log("hello")
// }
// perone("friend",pertwo);
//pertwo is call back function
// I am busy friend
// hello


// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//       console.log("Loaded script with SRC: " + src)
//       callback(null, src);
//     }
//     script.onerror = function() {
//       console.log("Error loading script with SRC: " + src);
//       callback(new Error("Src got some error"))
//     }
//     document.body.appendChild(script);
//   }
//   function hello(error, src) {
//     if (error) {
//       console.log(error)
//       return
//     }
//     alert('Hello World!' + src);
//   }
//   function goodmorning(error, src) {
    
//     if (error) {
//       console.log(error)
//       sendEmergencyMessageToCeo();
//       return
//     }
//     alert('Good morning' + src);
//   } 
//   loadScript("https://cdn.jsdelikvkdvvr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 


//promise
// promise has two properties state and results
//initially state is pending after then state become fulfilled or rejected 
//benefits of promise is parallely execute hojaega
// let promise = new Promise(function(resolve, reject) {
//     alert("Hello, world!");
    
// })
// console.log("hello one")
// setTimeout(function(){
//     console.log("YOYO");
// },2000)
// console.log("Hello three")
// console.log(promise);

// hello one
// Hello three
// Promise {56}
// YOYO


//promise can either be resolved or rejected if resolved then it will give us value and
//if rejected then i will give us error
// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         // console.log("I am a promise and  i am fulfilled")
//         resolve(true)
//         // reject(new Error("I am an error"))
//     },5000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
    // setTimeout(()=>{
        // console.log("I am a promise and  i am rejected")
        // resolve(true)
//         reject(new Error("I am an error"))
//     },5000)
// }) 
// p1.then((value)=>{
//     console.log(value) 
// })
// p2.catch((error)=>{
//     console.log("some error occur in p2")
// })
// p1.then((value)=>{
//     cons
// })



// let p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("I am a promise and")
//     },2000)
// })
// p3.then((value)=>{
//     console.log(value)
//     let p5 = new Promise((resolve, reject)=>{
//         resolve("promise2")
//     })
//     return p5
// }).then((value)=>{
//     console.log("yoyo")
// })
// return ;

// let p9 = new Promise((resolve, reject){

// })

// in mutiple handler we don't need to return 



// let a1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value3");
//     },1000);
// });
// let a2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value3");
//     },2000);
// });
// let a3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value3");
//     },3000);
// });
// // a1.then((value)=>{
// //     console.log(value)
// // })
// // a2.then((value)=>{
// //     console.log(value)
// // })
// // a3.then((value)=>{
// //     console.log(value)
// // })
// let promise_all = Promise.all([a1,a2,a3])
// promise_all.then((value)=>{
//     console.log(value)
// })


// let a1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value3");
//     },1000);
// });
// let a2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value3");
//         reject(new Error("Error"));
//     },2000);
// });
// let a3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value3");
//     },3000);
// });

// let promise_all = Promise.allSettled([a1,a2,a3])
// promise_all.then((value)=>{
//     console.log(value)
// })
  

//59

//async / await
// hamm kisi bhi function ko async banna sakte hai and uske badh 
//uske andar promise ko await kar sakte hai
//async function always return a promise
// basically we stop function execution
//  async function harry(){
//     let delhiweather = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("27 Deg")
//         },2000)
//     })
// let bangaloreweather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("21 Deg")
//     },5000)
// })
//     console.log("fetching delhi weather please wait ...")
//     let delhiw = await delhiweather
//     console.log("fetched delhi weather:" + delhiw)
//     console.log("fetching banglore weather please wait...")
//     let banglorew = await bangaloreweather
//     console.log("fetched bangalore weather" + banglorew)
//     return [delhiw,banglorew]
// }
// console.log("welcome to weather control room")
// let a = harry()
// a.then((value)=>{
//     console.log(value)
// })

// welcome to weather control room
// fetching delhi weather please wait ...
// fetched delhi weather:27 Deg
// fetching banglore weather please wait...
// fetched bangalore weather21 Deg


//fetch api
//kabhi bhi hamhe network se data mangwana hotta hai tho hamm fetch api ka use karte hai


 


//87
// Destructuring & Spread Operators
//destructuring assignment values nikalata hai array and object se alag alag variable mai
//  let arr = [3,5,8]

//  let[a,b,c] = arr;
//  console.log(a,b,c)
 //Output
//  3 5 8
// let a = arr[0];
// let b = arr[1];

// let arr1 = [3,5,8,12,34]
// let[v,r,m,...rest] = arr1;
// console.log(v,r,m,rest)
 //Output
// 3 5 8 [ 12, 34 ]

// let {a,b } = {a:1, b:5}
// console.log(a,b);


// Spread Operators
// convert array to object
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// The spread operator is often used in combination with destructuring.
// let arr4 = [3,5,4]
// let obj = {...arr4};
// console.log(obj);
 //Output
// { '0': 3, '1': 5, '2': 4 }


// function sum(v1,v2,v3){
//     return v1+v2+v3;
// }
// console.log(sum(...arr4))


//generator function




//89
//hoisting
// jitni bhi function declaration hai vo uppar aajati hai js mai but initialization will be not
// Variable initializations are not hoisted, only variable declarations are hoisted:
// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;


//91
//arrow function
// var a = ['a','v','f'];
// a[100]='f';
// console.log(a.length)



//dom
//settimeout setinterval
//callbacks
//promise
//then catch 
//async await
//local storage 
//session storage  
//destructing and spread operators
//hoisting 
//closure
//arrow Function

//react , components of react, advatages of react, 
//virtual dom , events, state, usestate, useeffect

//flex box , boxmodel


