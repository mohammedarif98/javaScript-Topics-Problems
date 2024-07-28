
const stichName = (name)=>name.split(" ").join('-');
const lowerName = (name)=>name.toLowerCase()

console.log(lowerName(stichName("mohammed arif")));

//!---------------------------------


function f(x) {
    return x * 2;
}

function g(x) {
    return x + 3;
}

function h(x) {
    return x - 5;
}

function composedFunction(x) {
    return h(g(f(x)));
}

const result = composedFunction(10); // result is 13
console.log(result);

//! Using a helper function for function composition:

// function compose(...functions) {
//     return function (x) {
//         return functions.reduce((acc, func) => func(acc), x);
//     };
// }
// const f = (x) => x * 2;
// const g = (x) => x + 3;
// const h = (x) => x - 5;
// const composedFunction = compose(f, g, h);
// const result = composedFunction(10); // result is 13
