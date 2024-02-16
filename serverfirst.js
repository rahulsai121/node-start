const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>first Page</title></head>')
    if((req.url==='/home')){

        res.write('<body><h1>Welcome to Home</h1></body>')
    }
    else if((req.url==='/about')){

        res.write('<body><h1>Welcome to About Us Page</h1></body>')
    }
    else if((req.url==='/node')){

        res.write('<body><h1>Welcome to My Node Js Project</h1></body>')
    }
    res.write('</html>')
});

server.listen(4004);
