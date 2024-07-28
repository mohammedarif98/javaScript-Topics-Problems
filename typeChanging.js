

let numString = parseInt("12321");
console.log(typeof numString);


let numFloat = parseFloat("2.41");
console.log(typeof numFloat);


const jsonString = '{"name":"John","age":30,"city":"New York"}';
let obj1 = JSON.parse(jsonString);
console.log(` json string convert into javascript object ${obj1}`);


const jsonStrings = {name:"John",age:30,city:"New York"};
let obj2 = JSON.stringify(jsonStrings)
console.log(` javascript object convert into json string ${obj2}`);
