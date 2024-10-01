const name = "amirkhan"
const repoCount = 10

// console.log(name + repoCount + " value" );

console.log(`Hello my name is ${name} and my total repoCount is ${repoCount}`); 

const gameName = new String('amirkhan-ak-com')
console.log(gameName);


// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(-3,9)
console.log(newString);

const anotherString = gameName.slice(-3 , 9)
console.log(anotherString);

const newStringOne = "   amir   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amirkhan.com/amir%20khan"

console.log(url.replace("%20", "-"))

console.log(url.includes("amir"))

console.log(gameName.split('-'))

