//! print element in array using recursion

// function printArrayElements(arr, index) {
//     if (index >= arr.length) {
//       return; // Base case: stop when index is out of bounds
//     }
//     console.log(arr[index]); // Print the element at the current index
//     printArrayElements(arr, index + 1); // Recursively call the function with the next index
//   }
  
//   // Example usage
//   const myArray = [1, 2, 3, 4, 5];
//   printArrayElements(myArray, 0); // Start from the first element (index 0)
  
//! febonacci sequence use recursion

// function fibonacci(num){
//     if(num===0) return 1;
//     return num*fibonacci(num-1);
// }
// console.log(fibonacci(4));

//! uniq numbwers

// function uniq(arr){

//     for(let i=0;i<arr.length;i++){
//         let flag = 0;
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]==arr[j] && i!=j){
//                 flag++;
//                 break;
//             }
//         }
//         if(flag===0){
//             console.log(arr[i]);
//         }
//     }
// }
// let arr= [2,3,5,2,1,6,5,4];
// uniq(arr);

//! reverse array

// function rev(arr){
//     let temp = 0;
//     let j = arr.length-1;
//     for(let i=0;i<arr.length/2;i++){
//         temp = arr[i];
//         arr[i] = arr[j-i];
//         arr[j-i] = temp
//     }
//     console.log(arr);
// }
// let arr = [1,2,3,4,5,6,7,8];
// rev(arr)

//! prime or not

// function isprime(number){
//     if(number<=1){
//         return false;
//     }
//     for(let i=2;i<number;i++){
//         if(number%2==0){
//             return false;
//         }
//     }
//     return true;
// }
// const num = 2;
// if(isprime(num)){
//     console.log(`${num} is prime`);
// }else{
//     console.log(` ${num} is not prime `);
// }

//! server creation

// let http = require('http');
// let port = 2000;
// let server = http.createServer((req,res)=>{
//     res.writeHead(200,{"ContentType":"Text/plain"})
//     res.write("welcome server")
//     res.end()
// });
// server.listen(port,()=>{
//     console.log(`running  on port ${port}`);
// })

//! 

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
//     }
//     b.f();


  
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
//     });

//! ------------ swaping --------------

// let x = 10;
// let y = "arif";
// [x,y]=[y,x];
// console.log(x);
// console.log(y);

// let a = 5;
// let b = 10;

// a^=b
// b^=a
// a^=b
// console.log(`value of a : ${a} and value of b : ${b}`);

//! ------------ modifying -------------

// const arr = ["arif","naseem","roshan"];
// let res = arr.map((ele)=>{
//     return ele[0].toUpperCase() + ele.slice(1)
// })
// console.log(res);


//! ----------- print n number using recursion ----------------

// function num(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n <= 10) {
//         console.log(n);
//         return num(n + 1);
//     }
// }
// console.log(num(1));

//! ----------------------- factorial using recursion ---------------------------

// function facRec(n){
//         if(n==1){
//                 return 1;
//             }else{
//                     return n*facRec(n-1)
//                 }
//             }
//             console.log(facRec(4));
                 
//! ----------------------- factorial ---------------------------

// function factorial(n){
//     let res = 1;
//     for(let i=1;i<=n;i++){
//         res*=i
//     }
//     return res
// }
// console.log(factorial(4));

//! --------------------------- vowels checking ----------------------------------

//! ---------------------------- palindrome or not ---------------------------------

//! --------------- frequency of elements -----------------------

function countFrequencies(str) {
    const frequencies = {};
    for (const char of str) {
      frequencies[char] = (frequencies[char] || 0) + 1;
    }
    return frequencies;
  }
  
const str = "Mississippi";
const frequencies = countFrequencies(str);
console.log(frequencies);