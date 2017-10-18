// grab input arguments
var arg = process.argv.splice(2);
// console.log(arg); // [ '23', '3', '034', 'hello', '93' ]

// A loop that adds up the numbers and skips over not-numbers
var sum = 0;
arg.forEach(function(e) {
    var num = parseInt(e)
    if(isNaN(num) === true) {
        return;
    } else {
        sum += parseInt(e);
    }
});

console.log('\x1b[34m','==========================================================', '\x1b[0m');
console.log('');
console.log('\x1b[1m','\x1b[30m',`${arg.join(' + ')}`);
console.log('\x1b[1m','\x1b[32m',`                      = ${sum}`, '\x1b[0m');
console.log('');
console.log('\x1b[34m','==========================================================', '\x1b[0m');






