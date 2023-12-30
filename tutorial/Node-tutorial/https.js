const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello Home!!')
    }
    else if (req.url == '/about') {
        res.end('Hello About!!')
    }
    else {
        res.end(`
            <h1>Oops Something went wrong...</h1>
            <br>
            <a href="/">Return Home </a>
        `)
    }
    
})

server.listen(5000, () => {console.log("server is listening...")})