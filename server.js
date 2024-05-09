const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' :'text/html'});
    res.write('<h1>Hellow Sai</h1>');
    res.end();
})

const port = 3000;

server.listen(port, () => {
    console.log("started Server on 3000 port")
})