// var c =300//global scope


let a =300





// block scope
if (true) {

     let a = 10
     const b = 20
    var c = 3
    // console.log("INNER: ", 10);
    
}



//  console.log(a);
// console.log(b);
// console.log(c);



function one (){
    const username = "shivam"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

// one()


if (true){
    const username = "shivam"
    if(username=== "shivam"){
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++++ intersting +++++++++++++

console.log(addone(5))
function addone (num){
    return num+1
}

//  addone(5)



const addTwo = function(num){
    return num +2
}
addTwo(5)