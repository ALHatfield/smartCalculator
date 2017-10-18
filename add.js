function add() {
    // Grab the numeral input arguments
    var arg = process.argv.splice(3);
    // Initiate sum
    var sum = 0;
    // A loop that adds up the numbers and skips over not-numbers
    for(var i = arg.length - 1; i >= 0; i--) {
        var num = parseInt(arg[i]);
        isNaN(num) ? arg.splice(i, 1) : sum += num;
    }
    // Print
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
    console.log('');
    console.log('\x1b[1m','\x1b[30m',`${arg.join(' + ')}`,'\x1b[0m');
    console.log('\x1b[1m','\x1b[32m',`                      = ${sum}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
}

module.exports = add;





