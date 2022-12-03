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
// console.log(a+b);




