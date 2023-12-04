
function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("ples enter a user name");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("shivam"))//jb ham yaha koi value nhi pass krte h to undefine pass kr deta h




function calculateCartPrice(val1, val2, ...num1){
  return num1
}
// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "shivam",
    price: 1999


}
function handleObject(anyobject){
console.log(`usernsme is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
 
handleObject({
    username: "shiv",
    price: 333
})

const myNewArray = [200, 300, 4000, 6000]

function returnSecondValue(getArray){
   return getArray[2] 
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300,400,500]));





 