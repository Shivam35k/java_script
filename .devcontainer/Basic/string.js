const name = "shivam"

const repoCount = 50

// console.log(name +repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another method of string decleration 

const gameName = new String('shivam')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 3)
console.log(anotherString);

const newStringOne = "   shivam  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shiv%20kushwha"

console.log(url.replace('%20', '-'));

console.log(url.includes('shivam'));

console.log(gameName.split('-'));