

// (function(a,b){
//     // var a = 20;
//     // var b = 30;
//     console.log(a+b);
// })(12,33)


(function(){
    var x,y ;
    try{
        throw newError();
    }catch(x){
        x=1;
        y=2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();


/*
(function(){...})();: This is an immediately invoked function expression (IIFE) that encapsulates the entire code block.

var x, y;: This declares two variables, x and y, without assigning them any values. Both variables are function-scoped due to the var keyword.

try { throw newError(); }: This initiates a try-catch block. The throw newError(); statement throws an error. However,
the correct syntax should be throw new Error(); with a capital "E" for "Error".

catch(x) { x=1; y=2; console.log(x); }: The catch block catches the error thrown in the try block. Here, x is used as the catch parameter.
 However, this usage of x within the catch block will shadow the outer variable x.
 It is generally not good practice to use the same variable name as the catch parameter and an already existing variable.

x=1;: This assigns the value 1 to the catch parameter x (not the same as the outer variable x).
y=2;: This assigns the value 2 to the variable y.
console.log(x);: This logs the value of the catch parameter x, which is 1.
console.log(x);: This logs the value of the variable x after the catch block. However, because the catch block has its own x variable,
the value of the outer x remains unaffected by the assignment in the catch block. Therefore,
this will log the value of the outer x declared at the beginning, which is undefined.

console.log(y);: This logs the value of the variable y, which was assigned the value 2 within the catch block. So, it will log 2.
*/


// (function(){
//     var x,y;
//     try{
//       throw new Error();
//     }catch(x){
//       x=1;
//       y=2;
//       console.log("x");
//     }
//     console.log('x');
//     console.log('y');
//   })()

//!================

let areaWithClosure = (function(pi=3.14){
    return function area(r){
      return pi*r
    }
})()

console.log(areaWithClosure(2));

