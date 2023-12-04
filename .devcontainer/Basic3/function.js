
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

console.log(loginUserMessage("shivam"))//jb ham yaha koi value nhi pass krte h to undefine pass kr deta h


