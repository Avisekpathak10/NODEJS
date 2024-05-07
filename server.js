const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World' + req.url);

})

server.on('listening', () => {
    console.log("Server started0");
})

server.listen(5000);