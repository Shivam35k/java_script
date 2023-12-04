// var c =300//global scope


let a =300





// block scope
if (true) {

     let a = 10
     const b = 20
    var c = 3
    console.log("INNER: ", 10);
    
}



 console.log(a);
// console.log(b);
// console.log(c);