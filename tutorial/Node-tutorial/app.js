const {Sayer, Person} = require("./hello")
require("./add")

const Fruits = ['Apple', 'Banana', 'Orange', 'Mango']

Fruits.map(item => {
    return Sayer(item)
})

Person.map((item) => {
    return console.log(item)
})

//Synchronuos

// console.log("HELLO!!")
// console.log("Hey Boy!!")
// console.log("Bye Boy!!")
// console.log("Bye!!")

// Asynchronous

console.log("Hello!!")
console.log("Hey Boy!!")

setTimeout(() => {
    console.log('Bye Bro!!')
}, 1000)

setTimeout(() => {
    console.log("I execute after 5s!!")
}, 5000)

console.log("Bye!!")