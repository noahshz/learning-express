/*
 Modules
*/

//import values
const names = require("./4-module-names");
// import function
const greet = require("./5-module-utils");
// import object
const data = require("./6-alternative-exports");
//console.log(data);

greet("johnny");
greet(names.name1);
greet(names.name2);

// it is possible to import a module that already runs a function inside it
require("./7-module-stuff");