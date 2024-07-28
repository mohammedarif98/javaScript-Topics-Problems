
//* var -> function scoped
//* let  -> block scoped
//* const -> block scoped

// function sample(){
//     for(let i=0;i<=5;i++){
//         console.log(i);
//     }
//     // console.log(i);
// }
// sample()



// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
