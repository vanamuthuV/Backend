console.log("Hello");
console.time()
console.log("This Executes Next!!")
console.timeEnd()
console.time()
setTimeout(() => {
    console.log("This Executes Third!!");
},0)
console.timeEnd()
console.time()
console.log("This Executes Second!!");
console.timeEnd()
console.log("***************************")
const Hello = () => {
    console.time()
    setTimeout(() => {
        console.log("Hello From Function!!")
    })
    console.timeEnd()
}

console.time()
Hello()
console.timeEnd()