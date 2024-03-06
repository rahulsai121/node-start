const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);

            }
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        });
        
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]; // Assuming data is in the format "message=some_message"
            fs.writeFile('message.txt', message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/'); 
                return res.end();
            }); 
            
            
        });
    }
});

server.listen(3000);
