var sum = 0;
function add() {
    if(process.argv[2] === 'add') {
        // Grab input arguments
        var arg = process.argv.splice(2);
        // Initiate sum
        
        // A loop that adds up the numbers and skips over not-numbers
        arg.forEach(function(e) {
            var num = parseInt(e)
            if(isNaN(num) === true) {
                return;
            } else {
                sum += parseInt(e);
            }
        });
    };
    return sum;
}

module.exports = add;





