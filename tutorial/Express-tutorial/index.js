const http = require("http");
const fs = require('fs');
const { url } = require("inspector");

const home = fs.readFileSync('index.html', 'utf-8')
const about = fs.readFileSync('about.html', 'utf-8')
const style = fs.readFileSync('style.css', 'utf-8')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(home);
        res.end();
    }

    else if (req.url === '/about') {
        res.writeHead(200, { "content-type": 'text/html' })
        res.write(about)
        res.end()
    }

    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(style)
        res.end()
    }
 
    else {
         res.writeHead(404, { "content-type": "text/html" });
         res.write(`<h1>page not found!!`);
         res.end();
    }
    
});

server.listen(5000, () => {
  console.log("server is listening...");
});
