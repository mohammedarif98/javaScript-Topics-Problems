
// push,pop,unshift are return new modified array

const arr = [2,3,"arif","roshan",44]

// arr.pop()
// console.log(arr);

// arr.push(101)
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr.unshift("qwerty");
// console.log(arr);

// let arr2 = [00,21,34];
// let newarr =arr.concat(arr2)
// console.log(newarr);


//* ------- slice() --------

/* 
 the slice method is used to extract a section of an array and returns a new array containing the selected elements.
 It does not modify the original array
*/

// its take 2 arguments first arguments is where the array start and second is end the array

/*
 start: The index at which to begin extraction (inclusive).
 end: The index at which to end extraction (exclusive). If omitted, slice extracts to the end of the array.
 */

let newarr = [1,2,3,4,5,6,7,8,9,10];

// let sliceArr = newarr.slice(1,4);
// console.log(sliceArr);

//* ---------- splice() -----------

// array.splice(start, deleteCount, item1,item2)

/*
 The splice method is for manipulating arrays in JavaScript,
 as it allows you to add, remove, or replace elements within the array at specific indices.
*/

newarr.splice(2,4);
console.log(newarr);

newarr.splice(2,4,"a","b","c","d","e");
console.log(newarr);