


// function merg(arr1,arr2){

//     let mergarr = [];

//     for(let i=0;i<arr1.length;i++){
//         mergarr.push(arr1[i]);
//     }
//     for(let j=0;j<arr2.length;j++){
//         mergarr.push(arr2[j]);
//     }
//     return mergarr
// }

// console.log(merg([1,2,3,4],[66,77,88,99]));


function merg(arr1,arr2){
    let megarr = [];

    for(let i=0;i<arr1.length;i++){
        megarr+=arr1[i]
    }
    for(let j=0;j<arr2.length;j++){
        megarr+=arr2[j];
    }
    console.log(megarr);
}
merg([1,2,3,4],[5,6,7,8])