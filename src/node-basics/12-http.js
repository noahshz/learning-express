/*
 http - module
*/
const http = require('http');
const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/":
            res.end("Welcome to my first node.js homepage.");  
            break;
        case "/about":
            res.end("Here are some essential things about me :)");
            break;
        case "/contact":
            res.end("You can contact me via...");
            break;
        default:
            res.end(`
                <h1>Oops! Site not found.</h1>
                <a href="/">Home</a>
            `);
    }
});
server.listen(1300);