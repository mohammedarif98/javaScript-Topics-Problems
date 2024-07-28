
/*
Promise.resolve(): The Promise.resolve() method returns a Promise object that is resolved with a given value.

Promise.reject(): The Promise.reject() method returns a Promise object that is rejected with a given reason.
*/

// let resolvedPromise = Promise.resolve("Resolved promise");
// resolvedPromise.then((value) => {
//   console.log(value); // Output: Resolved promise
// });

// let rejectedPromise = Promise.reject(new Error("Rejected promise"));
// rejectedPromise.catch((error) => {
//   console.error(error); // Output: Error: Rejected promise
// });


//! --------------------------------------------------

/*
then(): The then() method is used to handle the fulfilled and rejected states of a promise. It takes two optional arguments,
the success and error callbacks, and returns a new promise.

catch(): The catch() method is used to handle any errors that occur in the promise chain. It is used to catch and handle rejected promises.

finally(): The finally() method is used to run a callback function regardless of whether the promise is fulfilled or rejected.
This is often used for cleanup operations. 
*/


// let myPromises = new Promise((resolve,reject)=>{
//     let age = 23;
//     if(age === 23){
//         resolve("correct age ")
//     }else{
//         reject("not correct age");
//     }
// });

// myPromises.then((successMessage)=>{
//     console.log(successMessage);
// }).catch((errorMessage)=>{
//     console.log(errorMessage);
// }).finally(()=>console.log("promises is completed"));


//! ----------------- promises.all() --------------------
/*The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves when all of the promises
 in the iterable have resolved,or rejects if any of the promises reject.*/

// let promise1 = Promise.resolve(3);
// let promise2 = 42;
// let promise3 =  new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,"foo")
// })

// Promise.all([promise1,promise2,promise3]).then((values)=>{
//     console.log(values);
// })

//! -------------------- Promise.allSettled(): -----------------------
/* The Promise.allSettled() method takes an iterable of promises as an input and returns a single promise that resolves
 when all of the promises in the iterable have settled,regardless of whether they fulfilled or rejected. */

//  let promise1 = Promise.resolve(4);
//  let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(reject,200,"error");
//     // setTimeout(resolve,200,"success");

// });

//  Promise.allSettled([promise1,promise2]).then((result)=>{
//     console.log(result);
//  });

//! --------------- promise.race() --------------------
/* Promise.race() method takes an iterable of promises as an input and returns a single Promise that resolves or rejects
 as soon as one of the promises in the iterable resolves or rejects.*/

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,"first promises")
// });

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,"second promises")
// });

// Promise.race([promise1,promise2]).then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//   console.log(error);
// });




//! map

// function asyncThing (value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), 100);
//   });
// }
// async function main () {
//   return [1,2,3,4].map(async (value) => {
//     const v = await asyncThing(value);
//     return v * 2;
//   });
// }
// main()
//   .then(v => console.log(v))
//   .catch(err => console.error(err));


//! filter

// function asyncThing (value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), 100);
//   });
// }
// async function main () {
//   return [1,2,3,4].filter(async (value) => {
//     const v = await asyncThing(value);
//     return v % 2 === 0;
//   });
// }
// main()
//   .then(v => console.log(v))
//   .catch(err => console.error(err));

//! reduce

// function asyncThing (value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), 100);
//   });
// }
// async function main () {
//   return [1,2,3,4].reduce(async (acc, value) => {
//     return await acc + await asyncThing(value);
//   }, Promise.resolve(0));
// }
// main()
//   .then(v => console.log(v))
//   .catch(err => console.error(err));