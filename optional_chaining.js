

const user = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'washington',
      country: 'USA'
    },
    job: {
      jobName : "developer",
      experience : "10 year",
      position : "senoir",
      company : {
        companyName : "google",
        display : function(){
          return `hello function`;
        }
      }
    }
  }
  
  
  // console.log( user.address.name || user.address.city);
  
  // const userDetail = user.address ? user.address.street : undefined;
  // console.log(userDetail);
  // const userDetail = user?.address;
  // console.log(userDetail);

  const userDetail = user.job?.position;
  console.log(userDetail);
  
  // console.log(user.job?.company?.display?.());
  // user.display();


  //!---------------------------

  
const person = {
  name : "mohammed arif",
  address : {
    place : "nettoor",
    district : "ernakulam",
  }
};

const res1 = person.address && person.address.place;  //* without chaining
const res2 = person?.address?.place;                  //* with chaining

console.log(res1);
console.log(res2);