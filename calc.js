// Dependancies
var fs = require('fs');
const help = require('./help.js');
const add = require('./add.js');
const sub = require('./sub.js');
const mult = require('./mult.js');
const div = require('./div.js');

// Grab the operator input
var operator = process.argv[2];

// Check the operator
operator === "help" ? help() : operator;
operator === "add"  ? add()  : operator;
operator === "sub"  ? sub()  : operator;
operator === "mult" ? mult() : operator;
operator === "div"  ? div()  : operator;




