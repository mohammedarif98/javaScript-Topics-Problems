


// function* genefunc(){
//     yield "arif",
//     yield 1,
//     yield "mohammed",
//     yield 2
// }

// const gen = genefunc()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

//!==============================

function* genefunc(){
    let i=0;
    while(true){
        yield i++;
    }
}

let res = genefunc();
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);
