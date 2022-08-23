const {createReadStream} = require('fs');

const stream = createReadStream('./content/subfolder/hugefile.txt', {
    highWaterMark:90000, 
    encoding:'utf-8'
});

stream.on('data', (result) => {
    console.log(result);
});
stream.on('error', (error) => {
    console.log(error);
});