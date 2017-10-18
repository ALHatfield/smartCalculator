var fs = require('fs');
const help = require('./help.js');
const add = require('./add.js');


var operator = process.argv[2];

operator === "help" ? help() : operator;
operator === "add" ? add(): operator;




