function mult() {
    // Grab the numeral input arguments
    var arg = process.argv.splice(3);
    // Initiate product to 1. Anything times 1 is itself.
    var product = 1;
    // Loop that subtracts each number and skips over non-numbers
    for(var i = arg.length - 1; i >= 0; i--) {
        var num = parseInt(arg[i]);
        isNaN(num) ? arg.splice(i, 1) : product *= num;
    }
    // Print
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
    console.log('');
    console.log('\x1b[1m','\x1b[30m',`${arg.join(' * ')}`,'\x1b[0m');
    console.log('\x1b[1m','\x1b[32m',`                      = ${product}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
}

module.exports = mult;