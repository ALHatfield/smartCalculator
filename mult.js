function mult() {
    var arg = process.argv.splice(3);                       //  Grab the numeral input arguments
    var product = 1;                                        //  Initiate product to 1. Anything times 1 is itself.

    
    for(var i = arg.length - 1; i >= 0; i--) {              //
        var num = parseInt(arg[i]);                         //  Loop that subtracts each number and skips over non-numbers
        isNaN(num) ? arg.splice(i, 1) : product *= num;     //
    }                                                       //
    
    // ---------------------- Print ----------------------- //
    console.log('\x1b[35m','==========================================================', '\x1b[0m');
    console.log('\x1b[33m','MULTIPLICATION','\x1b[0m');
    console.log('\x1b[1m','\x1b[30m','\x1b[4m',`${arg.join(' * ')}`,'\x1b[0m');
    console.log('\x1b[1m','\x1b[32m',`                      = ${product}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[35m','==========================================================', '\x1b[0m');
}

module.exports = mult;