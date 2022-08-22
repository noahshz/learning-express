/*
    Build-In Os module
*/

// require with module name
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns uptime of system
const sysuptime = os.uptime();
console.log(`The System Uptime is ${sysuptime} seconds`);

// object with some infos about os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);