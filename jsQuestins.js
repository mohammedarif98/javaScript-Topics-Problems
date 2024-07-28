

//todo generate numnber using recursion

// function numberGenerate(n){
//     if(n>0){
//         numberGenerate(n-1);
//         console.log(n);
//     }
// }
// numberGenerate(10)

//todo  reverse string with in-build methods

// let string = "mohammed arif";
// let revString = string.split("").reverse().join("");
// console.log(revString);

//todo  reverse string without in-build methods

// let name = "mohammed arif";
// let revString = "";

// for(let i=name.length-1;i>=0;i--){
//     revString+=name[i];
// }

// console.log(revString);

//todo febnacci series with recursion method

//todo febnacci series

// function fabnacci(length){
//     const fibArr = [0,1];

//     for(let i=2;i<length;i++){
//         fibArr.push(fibArr[i-1]+fibArr[i-2]);
//     }
//     return fibArr;
// }
// const series = fabnacci(7);
// console.log(series);

//todo remove duplicate number

//todo  factorial of number with recusrion method

//todo  factorial of number

//todo check the given string is anagram

// function anagram(str1,str2){

//     let s1 = str1.split('').sort().reverse('');
//     let s2 = str2.split('').sort().reverse('');

//     let js1 = s1.join('');
//     let js2 = s2.join('');

//     if(js1===js2){
//         console.log("is anagram");
//     }else{
//         console.log("not a anagram");
//     }

// }
// anagram("malayalam","malayalams");