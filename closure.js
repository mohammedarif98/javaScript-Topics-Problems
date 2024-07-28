

function outerfunc(){
    let name = "mohammed arif";
    function innerfunc(){
        return name;
     }
     console.log(innerfunc());
}
outerfunc();


//*====================================

// function sample(){
//     let count = 0;
//     return function(){
//         return count++;
//     }
// }

// let counter = sample();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
