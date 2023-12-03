// const tinderUser = new Object()    // singlten object

const tinderUser = {}

 tinderUser.id = "123abs"
  tinderUser.name = "shivam"
  tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
     email: "shiv@gmail.com",
     fullname:{
        userfullname: {
            firstname: "shivam",
            lastname: "kushwaha"
        }
     }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
 
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
    id: 1,
    email: "h@gamail.com"
},
{
    id: 1,
    email: "h@gamail.com"
},
{
    id: 1,
    email: "h@gamail.com"
},
]

users[1].email

console.log(tinderUser); 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//  here check the property

console.log(tinderUser.hasOwnProperty('isLoggedIn'));