var fs = require('fs');                     //
const help = require('./help.js');          //
const add = require('./add.js');            //  Dependancies
const sub = require('./sub.js');            //
const mult = require('./mult.js');          //
const div = require('./div.js');            //


var operator = process.argv[2];             //  Grab the operator input


operator === "help" ? help() : operator;    //
operator === "add"  ? add()  : operator;    //
operator === "sub"  ? sub()  : operator;    //  Operator call back
operator === "mult" ? mult() : operator;    //
operator === "div"  ? div()  : operator;    //




