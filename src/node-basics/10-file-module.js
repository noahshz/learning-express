/*
    Build-In File module
*/

const {readFileSync, writeFileSync, read, readFile} = require('fs');

// read file
const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');
console.log(second, second);

// write file
writeFileSync(
    './content/subfolder/icreatedthat.txt', 
    `this is the value of my own file : ${first}`,
    { flag: 'a' } //flag 'a' means it appends the text to the existing - without it will be overwritten
);