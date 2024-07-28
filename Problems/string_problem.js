//! string reversing

var fname = 'mohammed';
var lname = ' arif ';

// console.log(...fname,...lname);
// console.log(fname.concat(lname));

// let revfname = fname.split('').reverse().join(' ');
// let revLname = lname.split('').reverse().join(' ')
// console.log(`${revfname} ${revLname}`);

//!  palindrome 

// function palindrome(word){
//     let  revString = word.split('').reverse().join('');
//     return word === revString
// }
// console.log(palindrome("malayalam"));

//===================

// let name = 'malayalam';
// let revname = '';

// for(let i=name.length-1;i>=0;i--){
//     revname += name[i];
// }
// console.log(revname);

// if(name === revname){
//     console.log('its palindrome');
// }else{
//     console.log('not palindrome');
// }

//!  frequency of string

function Frequency(str) {
    const frequency = {};
  
    for (let char of str) {
      if (frequency[char]) {
        frequency[char] += 1;
      } else {
        frequency[char] = 1;
      }
    }
    return frequency;
  }
const string = [1,2,3,4,8,5,4,4,66,2,3,5];
console.log(Frequency(string));
  
 
// let name = "aohammed aaarif"

// let ress = name.charAt(0);
// let res = name.charCodeAt(0);
// console.log(res);
// console.log(ress);


