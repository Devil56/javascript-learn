// Dates

let myDate = new Date ()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,9,2,9,55)
// let myCreatedDate = new Date("2024-10-02")
let myCreatedDate = new Date("10-01-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMinutes());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))

