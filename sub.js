function sub() {
    // Grab numeral input arguments
    var arg = process.argv.splice(3);
    // Initiate diff to first argument
    var diff = arg[0];
    // reverse the array for the loop
    arg = arg.reverse();
    // Loop that subtracts each number and skips over non-numbers 
    // Need to start loop at 'arg.length - 2' otherwise starting value will subtract itself
    for(var i = arg.length - 2; i >= 0; i--) {
        var num = parseInt(arg[i]);
        isNaN(num) ? arg.splice(i, 1) : diff -= num;
    }
    // Reorder the list to print
    arg = arg.reverse();
    // Print
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
    console.log('');
    console.log('\x1b[1m','\x1b[30m',`${arg.join(' - ')}`,'\x1b[0m');
    console.log('\x1b[1m','\x1b[32m',`                      = ${diff}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[34m','==========================================================', '\x1b[0m');
}

module.exports = sub;