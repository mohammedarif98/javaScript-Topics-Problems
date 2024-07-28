

let arr = [7,2,9,4,5,6,1,8,3,10];

let wrr = [ 'APPLE', 'BANANA', 'CHERRIES' ]


//* ================ map() ===============

// let res = arr.map((num=>num*2));
// console.log(res);

//! change to  lowercase()
// let res = wrr.map(ele=>ele.toLowerCase());
// console.log(res);

//* ================ filter() ============

// let res = arr.filter((num=>num%2==0));
// console.log(res);

// let res1 = arr.filter(num=>num>=5);
// console.log(res1);

//* ================ reduce() =============

// let res = arr.reduce((num,acc)=>acc+num,0);
// console.log(res);

// let large = wrr.reduce((prev,cur)=>{
//     if(prev.length>cur.length){
//         return prev
//     }else{
//         return cur
//     }
// })
// console.log(large);

//* ============== sort() ===============

// let res = arr.sort((a,b)=>a-b);
// console.log(res)

//* ============== forEach() ============

// let res = arr.forEach(arr=>{console.log(arr)});
// let res = arr.forEach(function(num){console.log(num)});


//* ========== chaining methods ===============

// let res = arr.filter(num=>num%2==0).map(num=>num*2).reduce((val,acc)=>val+acc,0)

// console.log(res);