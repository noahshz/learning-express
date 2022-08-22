/*
    Build-In File module
*/

const {readFile, writeFile} = require('fs');

readFile('./content/subfolder/first.txt', 'utf8', (error, result) => {
    if(error) {
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        const second = result;
        writeFile('./content/subfolder/result-async.txt', 'this is a new line with async func', (error, result) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log(result);
        });
   });
});