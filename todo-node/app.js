require('dotenv').config();
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const webServer = http.createServer((req, res) => {
    console.log(process.env.BATCH);
   // console.log(req);
    console.log(`===================`);
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
})
webServer.listen(port, hostname, () => {
    console.log(`Server running at http//${hostname}:${port}/`);
}
);