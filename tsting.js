

// let name = "12345";
// let str1 = Number(name);
// console.log(str1);
// console.log(typeof(str1));


// console.log('\n');

// let age = 22;
// let  str2 = String(age);
// console.log(str2);
// console.log(typeof(str2));

// //* -------------------------------------------

// let x = 10; // x is a number
// let y = "5"; // y is a string
// let z = x + y; // z is "105" (string), where the number 10 is implicitly converted to a string and concatenated with the string "5"


// let str = "123";
// let num = Number(str); // Explicitly converts the string "123" to the number 123
// let num2 = 456;
// let str2 = String(num2); // Explicitly converts the number 456 to the string "456"

//! -----------------------------------

// let c = null ;
// console.log(c);

//! -----------------------------------

// function currying(a){
//     return function(b){
//         // console.log(a,b);
//          return a*b;
//     }
// }

// let res = currying(2);
// console.log(res(2));
// // currying(1)(2);

//! -----------------------------------

// function closure(){
//     let outerVariable = "arif";

//     function innerfunc(){
//         console.log(outerVariable);
//     }

//     innerfunc()
// }
// closure()

// --------------- jazz code -----

//   const b = {
//       name:"Vivek",
//       f: function(){
//         var self = this;
//         console.log(this.name);
//         (function(){
//           console.log(this.name);
//           console.log(self.name);
//         })();
//       }
//     }
//      b.f();

  
//   setTimeout(() => {
//     console.log('Inside setTimeout callback (1)');
//   }, 0);
  
//   setTimeout(() => {
//     console.log('Inside setTimeout callback (2)');
//   }, 0);
  
//   Promise.resolve()
//     .then(() => {
//       console.log('Promise resolved (1)');
//     })
//     .then(() => {
//       console.log('Promise resolved (2)');
//      });


// function runFunc(){
//     console.log("1" + 1);
//     console.log("A" - 1);
    // console.log(2 + "-2" + "2");
    // console.log("Hello" - "World" + 78);
//     console.log("Hello"+ "78");
//   }
//    runFunc();


//! ========== url parsing ===============

// const url = require('url');
// // URL to be parsed
// const urlString = 'https://www.example.com:8080/path/to/something?key1=value1&key2=value2#section';
// // Parsing the URL
// const parsedUrl = url.parse(urlString, true);
// // Printing the parsed URL
// console.log(parsedUrl);

// //--------------------------------
// const url = require("url");
// const dummyurl = "https://jsonplaceholder.typicode.com/todos/1"
// let urlres = url.parse(dummyurl,true);
// console.log(urlres);

//! ==================== async await===================

// function delay(ms){
//     return new Promise((resolve)=>setTimeout(resolve,ms));
// }

// async function greet(){
//     console.log("hello");
    
//     await delay(2000);
//     console.log("world");
// }
// greet();

