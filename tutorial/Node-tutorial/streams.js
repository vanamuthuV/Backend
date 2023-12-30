const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    const file = fs.readFileSync('sample.txt', 'utf-8')
    const val = `<div style="width : 500px;">
                ${file}
                </div>`
    res.end(val)
})

server.listen(5000, () => {console.log("server is listening...")})