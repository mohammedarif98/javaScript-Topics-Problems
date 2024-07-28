
//! ---------------------------------

// //* Shallow copy of an array
// const originalArray = [1, 2, 3, 4, 5];
// const shallowCopyArray = [...originalArray]; // Using the spread operator
// //* Modifying the shallow copy
// shallowCopyArray[0] = 10;

// console.log(originalArray); // [1, 2, 3, 4, 5]
// console.log(shallowCopyArray); // [10, 2, 3, 4, 5]



// //* Shallow copy of an object
// const originalObject = { a: 1, b: 2, c: 3 };
// const shallowCopyObject = { ...originalObject }; // Using the spread operator
// //* Modifying the shallow copy
// shallowCopyObject.a = 10;

// console.log(originalObject); // { a: 1, b: 2, c: 3 }
// console.log(shallowCopyObject); // { a: 10, b: 2, c: 3 }



//! ---------------------------------


//* Deep copy of an array
const original1Array = [1, 2, 3, 4, 5];
const deepCopyArray = JSON.parse(JSON.stringify(original1Array)); // Using JSON methods
//* Modifying the deep copy
deepCopyArray[2] = 10;

console.log(original1Array); // [1, 2, 3, 4, 5]
console.log(deepCopyArray); // [1, 2, 10, 4, 5]



//* Deep copy of an object
const original1Object = { a: 1, c: 2 } ;
const deepCopyObject = JSON.parse(JSON.stringify(original1Object)); // Using JSON methods
//* Modifying the deep copy
deepCopyObject.c = 10;

console.log(original1Object); // { a: 1,  c: 2  }
console.log(deepCopyObject); // { a: 1,  c: 10  }
