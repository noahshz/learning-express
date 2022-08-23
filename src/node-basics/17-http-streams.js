const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/subfolder/hugefile.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/subfolder/hugefile.txt', {encoding: 'utf-8'});
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (error) => {
        res.end(error);
    });
})
.listen(1300);