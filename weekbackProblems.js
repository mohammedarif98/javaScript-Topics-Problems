
//!------------------------------------
//* Function to remove the nth element from an array

// function removeNthElement(array, n) {
//     if (n >= 0 && n < array.length) {
//       array.splice(n, 1);
//     } else {
//       console.error("Invalid index");
//     }
//   }
// let myArray = [1,2,3,4,5] 
// removeNthElement(myArray,2);
// console.log(myArray);

//*=======without inbuild method===========
// function removeNthElement(arr,n) {
//     if (n < 0 || n >= arr.length) {
//         console.log("Invalid index");
//         return arr;
//     }
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i!== n) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let originalArray = [1, 2, 3, 4, 5];
// let newArray=removeNthElement([1,2,3,4,5],2); // Remove element at index 2
// console.log(newArray); // Output: [1, 2, 4, 5]


//!--------------------------------------
//* count the occurence of specific value in array

// function countValue(arr,val){
//     let count = 0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===val){
//             count++
//         }
//     }   
//     return `occur in ${count} times`;
// }
// console.log(countValue([1,2,3,2,1,3,4,1,5],1));


// //* ======use reduce()======
// function countValue(arr,val){
//     let red = arr.reduce((total,current)=>{
//         if(current === val){
//             total++
//         }
//         return total
//     },0)
//     return ` its ${val} occur in ${red}`
// }
// console.log(countValue([2,1,2,2,1,2,5,1,3,2,4,2,5,1],2));



//! -------- chareter encoding ----------
// let buff = Buffer.from("mohammed arif");
// console.log(buff);
// let res = buff.toString('utf-8');
// console.log(res);



//! ---------- promise -------------

// let promises = new Promise((resolve,reject)=>{
//     let name = "mohammed arif";
//     if(name === "mohammed arif"){
//         resolve(name)
//     }else{
//         reject("name is not correct")
//     }
// })
// promises.then((name)=>{
//     console.log(`th name is ${name}`);
// }).catch((error)=>{
//     console.log(error);
// })

//! -------------- async await --------------------

// function fetchData(number){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (number % 2 === 0) {
//               resolve(`${number} is even.`);
//             } else {
//               reject(`${number} is odd.`);
//             }
//           },1000);
//     })
// }

// async function fetchDataAsync(number){
//     console.log('start processing number');
//     try{
//         const res = await fetchData(number);
//         console.log(res);
//     }catch(error){
//         console.error("ERROR : ", error);
//     }
//     console.log('completed'); 
// }
// fetchDataAsync(21)
// fetchDataAsync(11)
// fetchDataAsync(9)

//!---------------------------------------


// let pro = new Promise((res,rej)=>{
//     let name = "arif";
//     if(name == "arif"){
//         res(`correct name : ${name}`);
//     }else{
//         rej("the name is not corect")
//     }
// })
// pro.then((name)=>{
//     console.log(`the name is ${name}`);
// }).catch((err)=>{
//     console.log(`ERROR`,err);
// })

