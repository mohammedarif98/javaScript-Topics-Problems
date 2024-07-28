
//! for in loop   [ in for in loop we can iterate object also array data types ]

// let obj = {
//     name : "mohammed arif",
//     place : "ernakulam",
//     age : 22,
// }

// for(pro in obj){
//     console.log(obj[pro]);  // get values
//     console.log(pro); // get key
// }

// let arr = [1,2,23,2,4,33,53,5]

// for(ele in arr){
//     console.log(arr[ele]);
// }

//! for of loop 

// let arr = [3,4,6,78,90,0];

// let sum=0;
// for(let i=0;i<arr.length;i++){
//     // sum+=arr[i]
//     console.log(arr[i]);
// }

// for(val of arr){
//     console.log(val);   //  its print element in array
// }

// for(val in arr){
//     console.log(val);  // its print index of array
// }

//! forEach in js

let arr = [1,2,3,4,5,6,7,8,9]

arr.forEach(function(ele){
    console.log(ele);
})