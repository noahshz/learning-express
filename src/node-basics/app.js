/*
 http - module
*/
const http = require('http');
const server = http.createServer((req, res) => {
    res.write("Welcome to our home page");
    res.end();
});
server.listen(1300);