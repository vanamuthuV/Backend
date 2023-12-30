const eventEmitter = require('events')
const http = require('http')

const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Hello I made server using another syntax!! Hurray!!')
})

server.listen(5000)