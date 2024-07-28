

//* ============== function currying ====================== 

// function sample(x){
//         return function(z){
//             console.log(x+z);
//         }
// }

// let res = sample(10,)
// res(3);

//---------------------------------

// function add(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         };
//     };
// }

// let res1 = add(10)(20)(30)
// console.log(res1);

//*  ================== function currying usng bind() methods =======================

// function sample(a,b){
//     console.log(a*b);
// }

// let multiply0 = sample.bind(this,10);
// multiply0(2)

// let multiply1 = sample.bind(this,100);
// multiply1(3)


//* ======================= currying using closure =============================


function curriedSum(a) {
    return function(b) {
      return a + b;
    };
  }
  
  // Usage
  const add5 = curriedSum(5)(3);
  console.log(add5); // Outputs 8

  const add3 = curriedSum(5);
  console.log(add3(9)); // Outputs 8
  