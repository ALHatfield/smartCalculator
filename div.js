function div() {
    // Grab the numeral input arguments except the first number
    var arg = process.argv.splice(4);
    // Initate dividend to first numeral argument
    var dividend = process.argv[3];
    // Loop that subtracts each number and skips over non-numbers
    for(var i = arg.length - 1; i >= 0; i--) {
        var num = parseInt(arg[i]);
        isNaN(num) ? arg.splice(i, 1) : dividend /= num;
    }
    // Print
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
    console.log('');
    console.log('\x1b[1m','\x1b[30m',`${arg.join(' / ')}`,'\x1b[0m');
    console.log('\x1b[1m','\x1b[32m',`                      = ${dividend}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
}

module.exports = div;