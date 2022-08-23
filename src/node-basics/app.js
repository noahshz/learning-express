const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// getText('./content/subfolder/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

const start = async() => {
    try {
        const first = await readFilePromise('./content/subfolder/first.txt', 'utf-8');
        const second = await readFilePromise('./content/subfolder/second.txt', 'utf-8');
        await writeFilePromise('./content/subfolder/second.txt', "asbduVB");
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();