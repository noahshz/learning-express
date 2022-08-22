/*
    Build-In Path module
*/

const path = require('path');

// get the system filepath seperator
const sep = path.sep;
console.log(sep);

// create filepath from folder -/filenames
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// get basename
const base = path.basename(filePath);
console.log(base);

// resolve a path into absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);