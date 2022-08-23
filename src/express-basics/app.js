const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./home.html');

const server = http.createServer((request, response) => {
    // console.log(request.method);
    // console.log(request.url);
    response.writeHead(200, {'content-type':'text/html'});

    const url = request.url;
    switch(url) {
        case "/":
            // home
            response.write(homePage);
            break;
        case "/about":
            // about
            response.write("about me");
            break;
        case "/contact":
            // contact
            response.write("contact me");
            break;
        default:
            // not found
            response.writeHead(404, {'content-type':'application/json'});
            response.write("not found 404");
    }
    response.end();
});

server.listen(5000, () => {
    console.log(`Server listening on 5000...`);
});