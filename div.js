function div() {
    var arg = process.argv.splice(3);                   //  Grab numeral input arguments
    var dividend;                                       //  Initiate our starting point as a variable
    arg = arg.reverse();                                //  Reverse the arguments for the loop

    for(let i = arg.length - 1; (i >= 0) && (dividend === undefined); i--) {    //
        isNaN(arg[i]) ? arg.splice(i, 1) : dividend = arg[i];                   //  Find starting number to subtract from
    }                                                                           //

    if(typeof dividend !== undefined) {                                         //
        for(let i = arg.length - 2; i >= 0; i--) {                              //  Subtract remaining arguments from starting number
            isNaN(arg[i]) ? arg.splice(i, 1) : dividend /= arg[i];              //
        }                                                                       //
    }

    arg = arg.reverse();                                //  Reorder the list to print
    
    // --------------------- Print -------------------- //
    console.log('\x1b[35m','==========================================================', '\x1b[0m');
    console.log('\x1b[33m','DIVISION','\x1b[0m');
    console.log('\x1b[1m','\x1b[30m','\x1b[4m',`${arg.join(' / ')}`,'\x1b[0m');
    console.log('\x1b[1m','\x1b[32m',`                      = ${dividend}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[35m','==========================================================', '\x1b[0m');
}

module.exports = div;