
class bio{
    constructor(name,place){
        this.name = name;
        this.place = place; 
    }

    display(){
        console.log(` the parent name is ${this.name} and place is ${this.place}`);
    }
}

class person1 extends bio{
    constructor(name,place,education){
        super(name,place);
        this.education = education;
    }
    displayperson(){
        console.log(` the child name is ${this.name} and place is ${this.palce} and Education ${this.education}`);
    }
}


let obj1 = new person1("mohammed arif","ernakulam","bsc.Electronics");
let obj2 = new bio("siddique","ernakulam");

obj2.display()
obj1.displayperson();