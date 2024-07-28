
// var is function and block scope

const name = "mohammed arif"
function sample(){
    const name = "mohammed  hafis";
    console.log(name);
}

sample()
console.log(name);