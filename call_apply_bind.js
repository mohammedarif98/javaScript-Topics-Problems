
//* ========================== call() method ==================================

// let person1 = {
//     firstname : " mohammed",
//     lastname : "arif",
//     printfullname : function(){
//         console.log(`my fullname is ${this.firstname+" "+this.lastname}`);
//     }
// }
// person1.printfullname();

// let person2 = {
//     firstname : "roshan",
//     lastname : 'jojy'
// }
// person1.printfullname.call(person2)

//-------------

// let bio1 = {
//     firstname : "mohammed",
//     lastname : "arif"
// }

// let displaybio = function(place){
//     console.log(` the name is ${this.firstname+" "+this.lastname} and from ${place}`);
// }
// displaybio.call(bio1,"ernakulam")

// let bio2 = {
//     firstname : "roshan",
//     lastname : "jojy",
// }
// displaybio.call(bio2,"idukki")


//! in call method pass the argumnets in comma seprate and induvidaly

//*================================ apply() method =======================================================


// let person1 = {
//     firstname : "mohammed",
//     lastname : "arif",
// }

// const displayName = function(place,age){
//     console.log(` my fullname is ${this.firstname+" "+this.lastname},age is ${age} and from ${place}`);
// }

// let person2 = {
//     firstname : "roshan",
//     lastname : "jojy"
// }

// displayName.apply(person1,["ernakulam",23]);
// displayName.apply(person2,["kollam",33])

//! in apply method pass the second argumnets in array list 

//* ====================== bind() method =======================

// let person1 = {
//     firstname : "mohammed",
//     lastname : "arif"
// }

// let displayname = function(age,place){
//     console.log(`my name is ${this.firstname+' '+this.lastname}, age is ${age} and from ${place}`);
// }

// let person2 = {
//     firstname : "roshan",
//     lastname : 'jojy'
// }

// let display1 = displayname.bind(person1,33,"ernakulam");
// // console.log(display1());
// display1()
// let display2 = displayname.bind(person2,11,"kollam")
// // console.log(display2());
// display2()






//!  ------------------------------------

// Example objects
const obj1 = {
    num: 10
  };
const obj2 = {
    num: 5
  };
    // Example function to perform an operation
function subtract(a, b) {
    return this.num - (a + b);
  }
  // Call example
console.log(subtract.call(obj1, 2, 3)); 
  // Apply example
console.log(subtract.apply(obj2, [3, 1])); 
  // Bind example
const boundSubtract = subtract.bind(obj1, 4, 1);
console.log(boundSubtract()); 
  