// let a = 10;
// console.log(a);
//Output
// 10
// a = "Alakh";
// console.log(a);
//Output
// Alakh
//this shows js is dynamically language because we can change it datatype like first it was number then it is string in it's runtime as we have changed a=10 to a="Harry"

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
// Output
// Harry

// let a = 10;
// let a = "Harry";
// console.log(a);
//let cannot be redeclared
// let a = 10;
//     ^
// SyntaxError: Identifier 'a' has already been declared


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

// let a = 18;
// let b = "alakh";
// console.log(a+b);
// console.log(typeof (a+b));
//Output
// 18alakh
// string
// yaad rakna ki string & number add kar rahe hai isliye string type print hoo raha hai a+b karne parr

// const h = {
//     alakh : "hello",
//     section : 1
// };
//alakh is key and hello is value in object


// h['friend']="Shubham"
// to add value in object we have written in above line

// h['name']="Alakh"
// changing the value of name in object h
// h['alakh'] = 3;
// console.log(h);

// { alakh: 3, section: 1, friend: 'Shubham', name: 'Alakh' }

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

// const prompt = require("prompt-sync")({sigint: true});
// The prompt-sync module is a function that creates prompting functions, so you need to call prompt-sync in order to get your actual prompting function.
// Once you’ve loaded the prompt-sync module and called it, using it to retrieve user input is relatively straightforward
// The prompt() function returns the user feedback, so simply store that return value to a variable to use it later.
// By default, most terminal programs will exit with Ctrl + C (This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program). With prompt-sync, in order to make sure that your users can exit at will, add a configuration object with sigint: true when invoking the prompt-sync function:


//Program to add first n natural numbers
// let sum = 0;
// let n = prompt("Entern the value of n")
// n=Number.parseInt(n)
// The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.
// parseInt() parses a string and returns the first integer, first integer means like if number is 10.33 then it will return 10
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
// Output
//Alakh
//if we want to remove the space that is there in alakh then we can do using trim 

//string is immutable means whatever we put function on name , 
//but the value of string will never changed means name will always be "hello"


// console.log("har\"".length)
// 4

// let text = "Hello world, welcome to the universe.";
// let ans = text.startsWith("Hello");
// console.log(ans);
// true
// startsWith() method returns true if a string starts with a specified string.
// Otherwise it returns false.

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

// console.log(a.join("-"))
// 10-20-30-alakh
// console.log(a.join("alakhdeep"))
// 10alakhdeep20alakhdeep30alakhdeep40


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

// let w = [100,20,3,4];
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




// 1) Register
// 2)Send Welcome Email
// 3)Login
// 4)Set user data
// 5)Display user data


// function register(){
//     console.log("register end");
// }
// function sendemail(){
//     console.log("email end")
// }
// function login(){
//     console.log("login end")
// }
// function getuserdata(){
//     console.log("got user data")
// }
// function displayuserdata(){
//     console.log("user data displayed")
// } 
// register();
// sendemail();
// login();
// getuserdata();
// displayuserdata();

// console.log("other application work");

//this is synchronous : line by line it will work



// function waitForThreeSeconds(){
//     let ms = 3000 + new Date().getTime();
//     while(new Date()<ms){}
// }
// function register(){
//     waitForThreeSeconds();
//     console.log("register end");
// }
// function sendemail(){
//     waitForThreeSeconds();
//     console.log("email end")
// }
// function login(){
//     waitForThreeSeconds();
//     console.log("login end")
// }
// function getuserdata(){
//     waitForThreeSeconds();
//     console.log("got user data")
// }
// function displayuserdata(){
//     waitForThreeSeconds();
//     console.log("user data displayed")
// } 
// register();
// sendemail();
// login();
// getuserdata();
// displayuserdata();

// console.log("other application work");
//jaruri nhi hai ki time set add karne se hii async banata hai ,keval set time out se async banata hai
//abhi yehh program synch hai , kyoki yehh line by line print kar raha hai
//abhi isme problem yehh hai ki agar "other application work"
//mai koi time boundation nhi hai but vo at the end print hoo raha hai kyoki 
//yehhh synch program hai



// function register(){
//         setTimeout(()=>{
//             console.log("register end");
//         },1000)
      
//     }
//     function sendemail(){
//         setTimeout(()=>{
//             console.log("email end")
//         },1000)
//     }
//     function login(){
//         setTimeout(()=>{
//             console.log("login end")
//         },1000)
        
//     }
//     function getuserdata(){
//         setTimeout(()=>{
//             console.log("got user data")
//         },3000)
//     }
//     function displayuserdata(){
//         setTimeout(()=>{
//             console.log("user data displayed")
//         },1000)
//     } 
//     register();
//     sendemail();
//     login();
//     getuserdata();
//     displayuserdata();

//     console.log("other application work");






    // function register(a){
    //higher order function is that function jho dusre function 
    //ko as a parameters le sakti hai yaa phir ekk function ko return karti hai
    //     setTimeout(()=>{
    //         console.log("register end");
    //         z();
    //     },3000)
    // }
    // function sendemail(b){
    //     setTimeout(()=>{
    //         console.log("email end")
    //         b();
    //     },1000)
    // }
    // function login(c){
    //     setTimeout(()=>{
    //         console.log("login end")
    //         c();
    //     },1000)
    // }
    // function getuserdata(d){
    //     setTimeout(()=>{
    //         console.log("got user data")
    //         d();
    //     },3000)
    // }
    // function displayuserdata(){
    //     setTimeout(()=>{
    //         console.log("user data displayed")
    //     },1000)
    // } 
    // // callback hell
    // register(function a(){
    //     sendemail(function b(){
    //         login(function c(){
    //             getuserdata(function d(){
    //                 displayuserdata();  
    //             });
    //         });
    //     });
    // });
    // console.log("other application work");




    // function register(a){
    //     setTimeout(()=>{
    //         console.log("register end");
    //         a();
    //     },3000)
    // }
    // function sendemail(b){
    //     setTimeout(()=>{
    //         console.log("email end")
    //         b();
    //     },1000)
    // }
    // function login(c){
    //     setTimeout(()=>{
    //         console.log("login end")
    //         c();
    //     },1000)
    // }
    // function getuserdata(d){
    //     setTimeout(()=>{
    //         console.log("got user data")
    //         d();
    //     },3000)
    // }
    // function displayuserdata(){
    //     setTimeout(()=>{
    //         console.log("user data displayed")
    //     },1000)
    // } 
    // // callback hell
    // register(function a(){
    //     sendemail(function b(){
    //         login(function c(){
    //             getuserdata(function d(){
    //                 displayuserdata();  
    //             });
    //         });
    //     });
    // });
    // console.log("other application work");



    // function register(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("register end");
    //             resolve();
    //             // a();
    //         },3000)
    //     })
    // }
    // function sendemail(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("email end")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }

    // function login(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("login end")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // function getuserdata(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("get user data")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // function displayuserdata(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("user data displayed")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
     
    // // callback hell
    // register()
    //jabh resolve call hotta hai tabh agla then bhi call hojaega
    //jesse hii register function resolve hojaegi uske badh then function automatically chalega
    //     .then(sendemail)
    //then will call all the functions like sendemail , login etc
    //     .then(login)
    //     .then(getuserdata)
    //     .then(displayuserdata);
      
    // console.log("other application work");




    //  function register(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //       
    //             console.log("register end");
    //              resolve();
    //             // a();
    //         },1000)
    //     })
    // }
    // function sendemail(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("email end")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }

    // function login(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("login end")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // function getuserdata(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("get user data")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // function displayuserdata(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("user data displayed")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
     
    // // callback hell
    // register()
    // // jabh resolve call hotta hai tabh agla then bhi call hojaega
    // // jesse hii register function resolve hojaegi uske badh then function automatically chalega
    //     .then(sendemail)
    // // then will call all the functions like sendemail , login etc
    //then mtb yehh hai ki mann lo register call hua sabh se phele tikh hai naa 
    //     .then(login)
    //     .then(getuserdata)
    //     .then(displayuserdata)
    //     .catch((err)=>{
    //         console.log('Error:',err)
    //     })
    // console.log("other application work");

    // other application work
    // Error: Error while registering




// async/await

// int a(int b,int c){
    // int add = b+c; //5 5
    // return add;    //10
// }




//code visually synchronous dikhega but hotta hai vo asynchronous 

//we can use awit inside function

//iska mtb yehh hai ki register ko call karo and wait karo , jabh takh register
//call end nhi hotta hai tabh takh hamme aage nhi bardna hai   
//await hamm ussi function ke andar use kar sakte hai jho async function hai 


// function register(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("register end");
//                 resolve();
//                 // a();
//             },1000)
//         })
//     }
//     function sendemail(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("email end")
//                 resolve();
//                 // b();
//             },1000)
//         })
//     }

//     function login(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("login end")
//                 resolve();
//                 // b();
//             },1000)
//         })
//     }
//     function getuserdata(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("get user data")
//                 resolve();
//                 // b();
//             },1000)
//         })
//     }
//     function displayuserdata(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("user data displayed")
//                 resolve();
//                 // b();
//             },1000)
//         })
//     }
//     async function authenticate(){
//         await register();
//         await sendemail();
//         await login();
//         await getuserdata();
//         await displayuserdata();
//     }
//     authenticate();

//     console.log("other application work");


    // function register(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("register end");
    //             resolve();
    //             // a();
    //         },1000)
    //     })
    // }
    // function sendemail(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("email end")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }

    // function login(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("login end")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // function getuserdata(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("get user data")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // function displayuserdata(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("user data displayed")
    //             resolve();
    //             // b();
    //         },1000)
    //     })
    // }
    // async function authenticate(){
    //     await register();
    //     await sendemail();
    //     await login();
    //     await getuserdata();
    //     await displayuserdata();
    // }
    // authenticate().then(()=>{
    //     console.log('baap');
    // });

    // console.log("other application work");

//kisi bhi function mai hamm async use karte hai vo by default promise return kar detti hai 
//mtb ki authenciate function  ka result ekk promise hai  mtb ki hamm  then ka use kar sakte hai 

//promise uppar se return hota hai mtb ki displayuserdata,getuserdata etc functions promise return kar rahe hai , tho hamm dono use kar sakte hai niche authenticate mai jesse ki async await or  
//then function for making code asynchronous


// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("register end");
//             resolve();
//             // a();
//         },1000)
//     })
// }
// function sendemail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve();
//             return reject('Error while sending email');
//             console.log("email end")
//             // b();
//         },1000)
//     })
// }

// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("login end")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function getuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("get user data")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function displayuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("user data displayed")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// async function authenticate(){
//     await register();
//     await sendemail();
//     await login();
//     await getuserdata();
//     await displayuserdata();
// }
// authenticate().then(()=>{
//     console.log('baap');
// }).catch((er)=>{
//     console.log(er)
// })
//reject agar koi function karega tho seedha error catch ke andar aayega

// console.log("other application work");



// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("register end");
//             resolve();
//             // a();
//         },1000)
//     })
// }
// function sendemail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve();
//             return reject('Error while sending email');
//             console.log("email end")
//             // b();
//         },1000)
//     })
// }

// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("login end")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function getuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("get user data")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function displayuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("user data displayed")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// async function authenticate(){
//     try{
//         await register();
//         await sendemail();
//         await login();
//         await getuserdata();
//         await displayuserdata();
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// authenticate().then(()=>{
//     console.log('baap');
// })
// other application work
// register end
// Error while sending email
// baap

// why authenticate() is printing baap is because
// we have not used error handing in that function
//as if we use then we return before console.log and the thing not get print  

// console.log("other application work");



// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("register end");
//             resolve();
//             // a();
//         },1000)
//     })
// }
// function sendemail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve();
//             return reject('Error while sending email');
//             console.log("email end")
//             // b();
//         },1000)
//     })
// }

// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("login end")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function getuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("get user data")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function displayuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("user data displayed")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// async function authenticate(){
//     try{
//         await register();
//         await sendemail();
//         await login();
//         await getuserdata();
//         await displayuserdata();
//     }
//     catch(err){
//         console.log(err);
//         throw new Error(); 
//     }
// }
// authenticate().then(()=>{
//     console.log('baap');
// }).catch((err)=>{
//     console.log(err);
// })

// console.log("other application work");

//Output
// other application work
// register end
// Error while sending email
// Error


//abhi uppar wallw code mai authenticate ki error handling nhi thi kyoki usme hamne 
//error nhi daala tha isliye hamne throw new error likha hai yehh kya karega authenticate mai
//error daal dhega phir hamara baap print nhi hogha , ekk eoor dhe dhega lekin agar hamm 
//auhenticate function ke andar catch use karenge tho throw new error jho bhi error dhega vo authenticate function catch kar legha


//how to get access data that is written inside resolve and we are passing that data using resolve function

// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("register end");
//             resolve('success');
//             // a();
//         },1000)
//     })
// }
// function sendemail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
            
//             // return reject('Error while sending email');
//             console.log("email end")
//             resolve();
//             // b();
//         },1000)
//     })
// }

// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("login end")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function getuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("get user data")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// function displayuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("user data displayed")
//             resolve();
//             // b();
//         },1000)
//     })
// }
// async function authenticate(){
//     try{
//         const message = await register();
//                         await sendemail();
//                         await login();
//                         await getuserdata();
//                         await displayuserdata();
//                         console.log(message);
        
//     }
//     catch(err){
//         console.log(err);
//         // throw new Error(); 
//     }
// }
// authenticate().then(()=>{
//     console.log('baap');
// }).catch((err)=>{
//     console.log(err);
// })

// console.log("other application work");





//NAMASTE JS SEASON - 2

//promises

// const cart = ["shoes","pants","kurtas"];

// createOrder(cart);


//promise is an empty object 
//in callback we pass a function to another function
//we are attaching a call back function to  promise object


//fetch()
//fetch functions return us a promise 


//three states inside the promise
//pending,fulfill and rejected
 


// const GITHUB_API = "https://api.github.com/users"
// const user = fetch(GITHUB_API);
//user will get promise object because fetch return promise 
// console.log(user)

// promise in immutable

// const promise = createOrder(cart);
// promise.then(function(orderID)){
//     proceedToPayment(OrderID);
// }
//these both are equal we can write anything


// createOrder(cart)
// .then(function(orderID){
//     proceedToPayment(OrderID);
// })
// .then(function(paymentInfo){
//     showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     updateWalletBalance(paymentInfo);
// })


// createOrder(cart)
// .then((orderID) => proceedToPayment(OrderID))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalance(paymentInfo));


    //output

    // other application work
    // register end
    // email end
    // login end
    // get user data
    // user data displayed
    // success
    // baap



//Namaste Javascript Season - 1

//Lecture 1

//the whole think is called execution contest and inside there are two things that
//1)memory componenet : In this we write functions and vaiables values stored in key value format
//2)code component : in this we write whole Javascript code



//Lecture 2

// var n = 2;
// function square (num){
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

//abhi yehh program kuch esse kam karega ki phele memory componenet 
//mai variables and functions initialize hoyege
//and variable ko phele undefined se intialized karegi javascript in memory component
//and function purra ka purra copy hoo jatta hai memory component mai 
//{
//     var ans = num * num;
//     return ans;
// }
// and then phir same process hotta hai values jatti hai and return hotti hai code componenet mai


//Lecture 3

//Hoisting
  
// 1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
// 2. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
// 3. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
// 4. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
// 5. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.
// 6.  When we create an arrow function, then it behaves as a variable that is why undefined comes 
//var x      - Declaration
//var x = 7; - Initialization

// getName();
// console.log(x);
// var x = 7;
// function getName(){
//     console.log("Namaeste Js");
// }
//Output
// Namaeste Js
// undefined


// getName();
// console.log(x);
// console.log(getName);
// var x = 7;
// function getName(){
//     console.log("Namaeste Js");
// }
//Output
// Namaeste Js
// undefined
// [Function: getName]


// getName();
// console.log(x);
// console.log(getName);
// var x = 7;
// var getName = () => {
//     console.log("Namaeste Js");
// }
//undefined (see point 6)



//Lecture 4
 
//In call stack global execution context are kept
// 1. We learnt how functions work in JS.
// 2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
// 3. In the first phase, the variables are assigned "undefined" while functions have their own code.
// 4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
// 5. Once the function ends, the EC is removed from the call stack.
// 6. When the program ends, even the global EC is pulled out of the call stack


// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);

// }
//Output
// 10
// 100
// 1




//Lecture 5
  
// Shortest Program in JS: Empty file. Still, browsers make global Executionn context and global space along with Window object. 
// Variables present in a global space can be accessed by a "window" object. (like window.a)
// In global space, (this === window) object.
// Anything which is not inside any function is the global space

//var a = 10;
//function b(){
//    var x = 10;
//}
//console.log(window.a);  //10  
//console.log(a);         //10
//console.log(this.a)     //10


//Lecture 7

// 1. Undefined is like a placeholder till a variable is not assigned a value.
// 2. undefined !== not defined
// 3. JS- weakly typed language since it doesn't depend on data type declarations because a variable can hold number , string for example if I stored number later after I can store string in same variable

// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "hello world"
// console.log(a);
// Output
// undefined
// 10
// hello world


//Lecture 8 
// Scope Chain, Scope & Lexical Environment 


// 0) Lexical environment = Execution Context's Local Memory + Reference to Lexical Environment of its parent.

// 1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.

// 2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

// 3) Global execution context holds reference to null.

// 4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.

// 5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

// 6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.
 

// function a(){
//    var b = 10;
//    c();
//     function c(){
//         console.log(b);
//     }
// } 
// a();
//Output
//10

// function a(){
//     c();
//      function c(){
//          console.log(b);
//      }
//  }
//  var b = 10; 
//  a();
//Output
//10

// function a(){
//
//  
//         console.log(b);
//  
// }
// var b = 10; 
// a();
//Output
//10

// function a(){
//    var b = 10;
//    c();
//     function c(){
//         console.log(b);
//     }
// } 
// a();
// console.log(b);
//Output
//b is not defined because of scope 


//Lecture 9

// Let and const 

// 1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
// 2. Temporal Dead Zone exists until variable is declared and assigned a value.
// 3. window.variable OR this.variable will not give value of variable defined using let or const.
// 4. We cannot redeclare the same variable with let/const(even with using var the second time).
// 5. const variable declaration and initialisation must be done on the same line.
// 6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
// 7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
// 8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.


//Lecture 12

//Closures in JS

function x(){ 
    var a = 7;
    function y(){ 
        console.log(a);
    }
    y();
}
x();

// y is lexically inside x and x is lexically inside global scope
//so, inside y function we can access a's value 
//lexical means parent a is parent of y (I can say type of)


//call back

//function inside function is call back actually js is synchromous language so to make asynchronous
//we use call back , A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
//now but due to call back we can do asynchronous inside js 



// function show(a){
//     //this func is call back function
//     console.log("I am Show Function")
// }
// function geeky(show){
//     var a = 10; 
//     show(a);
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
//     console.log("f  etching banglore weather please wait...")
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

// let value2;
// let p = fetch("https://goweather.herokuapp.com/weather/la")
// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     // 200


//     console.log(response)
//     // true
//     return response.json()
// }).then((value2)=>{
//     console.log(value2);
//     console.log(value2.temperature)
//     document.getElementById("pappibhai");
//     let textNode =  document. createTextNode(value2.temperature);
//     document.body.appendChild(textNode);
// })


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


