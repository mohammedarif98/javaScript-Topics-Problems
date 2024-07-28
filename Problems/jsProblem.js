




// function uniq(arr){
//     // let uarr = [];
//     let total_uniq = 0;
//     for(let i=0;i<arr.length;i++){
//         let count = 0;
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j] && i!=j){
//                 count=1
//                 break
//             }
//         }
//         if(count===0){
//             total_uniq+=1
//             console.log(arr[i]);
//             // uarr.push(arr[i])
//         } 
//     }
//     console.log(`total count of unique value : ${total_uniq}`);
// }
// uniq([1,2,3,4,5,3,5,6])

//! ------------------------

// function isPrime(number) {
//     if (number <= 1) {
//         return 'Not a prime number';
//     }
//     if (number === 2) {
//         return 'Prime number';
//     }
//     for (let i = 2; i * i <= number; i++) {
//         if (number % i === 0) {
//             return 'Not a prime number';
//         }
//     }
//     return 'Prime number';
// }

// // Test the function with some examples
// console.log(isPrime(2)); // Prime number
// console.log(isPrime(3)); // Prime number
// console.log(isPrime(4)); // Not a prime number
// console.log(isPrime(11)); // Prime number
// console.log(isPrime(15)); // Not a prime number


//! ===========================


let  arr = [1,2,3,5,6,-1]
let sum = 0;

for(let i =0;i<arr.length-1;i++){
    if(arr[i]%2!==1){
        sum = sum+arr[i]
    }
}
console.log(sum);

