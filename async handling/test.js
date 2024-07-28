
//! ----------- Event Loop  ----------------

// console.log("first call");

// setTimeout(()=>{
//     console.log("first async function");
// },0);
// setTimeout(()=>{
//     console.log("sec async function");
// },0)

// console.log("middle call");

// Promise.resolve()
// .then(()=>{
//    console.log("fisrt promise")
// })
// .then(()=>{
//    console.log("second promise")
// })

// console.log("last call");

//! ------------- type casting ---------------

// function runFunc(){
//     console.log(2-"2");
//     console.log("1" + 1);
//     console.log("A" - 1);
//     console.log(2 + "-2" + "2");
//     console.log("Hello" - "World" + 78);
//     console.log("Hello"+ "78");
// }
// runFunc()

//! -------------- url parsing -----------------

// let url = require("url");
// let Purl = "https://www.example.com/path?param1=value1&param2=value2";
// let parsing = url.parse(Purl,true);
// console.log(parsing);

//! ------------- fs module ----------------

let fs = require("fs");

// fs.readFile("data.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })


// fs.stat('data.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stats);
// });


//! --------------- server creation and path -----------------------

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<h1>Hello, World!</h1>');
//         res.end();
//     } else if (req.url === '/about') {
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h2>This is the about page</h2>');
//         res.end()
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Page not found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


//! ----------------- otp generating ---------------------

// function otpGen(){
//   let number = '0123456789';
//   let otp = "";
//   for(let i=0;i<4;i++){
//     const randomNum = Math.floor(Math.random()*number.length);
//     otp+=number[randomNum];
//   }
//   return otp;
// }
// const otp = otpGen();
// console.log(` ypur otp is : ${otp}`);

//! ----------------------

// let data = true;

// let promise = new Promise((resolve,reject)=>{
//     if(data){
//         resolve("data Found");
//     }else{
//         reject("not found");
//     }
// })
// .then((success)=>{
//     console.log(success);
// })
// .then(()=>{
//     console.log("data print");
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("finished");
// })

//! url query and path

// let http = require("http");
// let url = require("url")

// let server = http.createServer((req,res)=>{ 
//     let parseUrl = url.parse(req.url,true);
//     // res.end(parseUrl.url);
//     // res.end(JSON.stringify(parseUrl));

//     let path = parseUrl.path;
//     let query = parseUrl.query;

//     console.log(query);
//     res.end(path)
// })
// server.listen(3000,function(){
//     console.log(`server run in port 3000`);
// })


//! ----------------------

 