// Primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;

// const id = Symbol('224')
// const anotherID = Symbol('224')

// console.log(id === anotherID);

// const bigNumber = 34859083498289859n


// Reference (Non-Primitive)

// Array, Objects, Functions


// const heros = ["Batman", "Deadpool", "Ironman"]
// let myDetails = {
//     name : "Amir",
//     age : 24,
// }

// const myFunction = function() {
//     console.log("Hello World");
// }
// console.log(typeof myFunction); // type--> Object Function
// console.log(typeof anotherID);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "amirkhan"

let anothername = myYoutubename
anothername = "khansamar"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@gmail.com",
    upi : "upi@ybl"
}
let userTwo = userOne

// console.log(userTwo);

userTwo.email = "amirkhan@gmail.com"
console.log(userTwo);
console.log(userOne );




