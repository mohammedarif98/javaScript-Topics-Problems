

let num = 0;

try {
    if (num > 0) {
        let res = 1000 / num;
        console.log(res.toFixed(2));
    } else {
        throw new Error("num should be greater than 0");
    }
} catch (error) {
    console.error("An error occurred:", error.message);
}


//! --------------------------------

try{
    var x  ;
    if(x==" ") throw "error occured due to no value";
    if(isNaN(x)) throw "not value is assigned";
    x= Number(x);
    if(x>10) throw "too high value";
    console.log(`${x} is the value X `);
  }catch(err){
    console.error(err);
  }finally{
    console.log("completed");
  }
  