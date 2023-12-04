const user = {
    username: "shivam",
    price: 999,
     
     welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
        console.log(this);
     }

}

// user.welcomeMessage() 
// user.username = "shubham"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username  = "shivam"
//     console.log(this.username);
// }
//  chai()


// const chai  = function(){
//     let username = "shivam"
//     console.log(this.username);
// }

const chai  = ()=>{
    let username = "shivam"
    console.log(this);
}
// chai()



// Arrow function

//  const addTwo = (num1, num2)=> {
//     return num1 + num2
//  }



// IMPLICIT RETURN 


// const addTwo = (num1, num2)=>  num1 + num2
// const addTwo = (num1, num2)=>  (num1 + num2)

// OBJECT RETURN 
const addTwo = (num1, num2)=>  ({username: "shivam"})
 console.log(addTwo(3,4));


 



