

// function one(callback){
//     setTimeout(()=>{
//         callback()
//     },1000)
// }
// console.log("fello");
// function two(){
//     console.log("its a callback function");
// }
// one(two)

//! ----------------------

// function func1(callback){
//     console.log("normal function");
//     setTimeout(()=>{
//         callback()
//         console.log("async functon");
//     },1000)
// }

// func1(()=>{
//     console.log("callback function");
// })


//! ----------------------------

let arr = [1,2,3,4,5];

arr.forEach((li,ind,)=>{
    console.log(`array index ${ind} :  array value ${li}`); 
})
