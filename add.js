
function add() {
    if(process.argv[2] === 'add') {
        // Grab input arguments
        var arg = process.argv.splice(3);
        // Initiate sum
        var sum = 0;
        // A loop that adds up the numbers and skips over not-numbers
        arg.forEach(function(e) {
            var num = parseInt(e)
            if(isNaN(num) === true) {
                // Remove non-number from array
                arg.splice(arg.indexOf(e), 2);
                return arg;
            } else {
                sum += parseInt(e);
            }
        });
        console.log(arg);
        console.log('\x1b[34m','==========================================================', '\x1b[0m');
        console.log('');
        console.log('\x1b[1m','\x1b[30m',`${arg.join(' + ')}`,'\x1b[0m');
        console.log('\x1b[1m','\x1b[32m',`                      = ${sum}`, '\x1b[0m');
        console.log('');
        console.log('\x1b[34m','==========================================================', '\x1b[0m');
    };
}

module.exports = add;





