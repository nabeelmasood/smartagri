const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader("Content-Type", "text/html");

    let filePath = path.join(__dirname, '..', 'client', 'src'); // Adjusted path here

    switch (req.url) {
        case '/':
            filePath = path.join(filePath, 'UserComponent','UserRegister.jsx');
            break;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            console.error(error);
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(5000, 'localhost', () => {
    console.log("Server is running on port 5000");
});
