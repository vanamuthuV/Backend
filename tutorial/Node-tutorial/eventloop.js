// const fs = require('fs')
// console.log("Task Started!!")
// const data = fs.readFileSync('index.js', 'utf-8')
// console.log(data)

// console.time()
// fs.readFile('index.j', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log("Async Task Completed!!")
// })
// console.timeEnd()

// console.log("Task Completes!!")


setInterval(() => {
    console.log("Hello World!!")
}, 1000)

console.log("Hello");

setInterval(() => {
    console.log("Hello World From 2!!")
}, 2000)