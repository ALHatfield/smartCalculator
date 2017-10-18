var fs = require('fs');
const help = require('./help.js');
const add = require('./add.js');

help();
add();


console.log('\x1b[34m','==========================================================', '\x1b[0m');
console.log('');
console.log('\x1b[1m','\x1b[30m',`${process.argv.splice(2).join(' + ')}`,'\x1b[0m');
console.log('\x1b[1m','\x1b[32m',`                      = `, '\x1b[0m');
console.log('');
console.log('\x1b[34m','==========================================================', '\x1b[0m');