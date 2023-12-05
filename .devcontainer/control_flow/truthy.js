const userEmail = "shiv@.ai"

if(userEmail){
    console.log("Go to user email");
}else{
    console.log("Dont have user email");
}


// falsy value

// false 
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN


//  truthy values 

// "0"
// 'false'
// " "
// []
// {}
// function(){}



const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 15
// val1 = null ?? 10

// val1 = undefined ?? 15

// val1 = null ?? 10 ??15


console.log(val1);



// terniary operator 

// condition ? true: false

const iceTeaPrice = 50
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");