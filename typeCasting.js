

// //* Implicit Type Conversion:
 
// // This occurs automatically when JavaScript converts one data type to another. For example, when you concatenate a string with a number,
// // JavaScript will implicitly convert the number to a string.

// let num1 = 4;
// let num2 = '10'
// let res1 =  num1+num2;
// console.log(typeof res1);

// //* Explicit Type Conversion:

// //This involves manually converting a value from one data type to another using JavaScript built-in functions or methods.
// //Some common methods for explicit type conversion include:

// let num3 = 44;

// let res = String(num3);
// console.log(typeof res);
// res = Boolean(num3)
// console.log(typeof res);


// //* ------------- parse Method ---------------

// let numString = parseInt("12321");
// console.log(typeof numString);


// let numFloat = parseFloat("2.41");
// console.log(typeof numFloat);

// //* ------------ JSON methods --------------------

// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// let obj1 = JSON.parse(jsonString);
// console.log(` json string convert into javascript object ${obj1}`);


// const jsonStrings = {name:"John",age:30,city:"New York"};
// let obj2 = JSON.stringify(jsonStrings)
// console.log(` javascript object convert into json string ${obj2}`);



console.log("2"+"2"-"2");
console.log(22-"2"); 


//!----------------------


const str = '1234'

const num1 = Number(str)
const num2 = parseFloat(str);
const num3 = parseInt(str);
const num4 = +str;
const num5 = str | 0;
const num6 = str * 1;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);