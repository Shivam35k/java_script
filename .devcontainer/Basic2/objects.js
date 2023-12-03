// singleton  

// object letral

const mySym = Symbol("key1")


 const JsUser = {
     name: "shivam",
     "full name": "shivam kushwaha",
     [mySym]: "mykey1",
     age: 18,
     location: "prayagraj",
     email: "shiv@gmail.com",
     isLoggedIn: false,
     lastLoginDays: ["monday", "staurday"]

 }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);



 JsUser.email = "shiv@chatgamil.com"  //changing the mail
//  Object.freeze(JsUser)
 JsUser.email = "sh@gmail.com"
 //console.log(JsUser);

JsUser.greeting = function(){
console.log("Hellow js user");
 }


 JsUser.greetingTwo = function(){
    console.log(`Hellow js user, ${this.name}`);
     }


 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

