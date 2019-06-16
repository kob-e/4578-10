for(var i=1; i < 6; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000)
}


for(let j=1; j < 6; j++) {
    setTimeout(function() {
        console.log(j);
    }, j * 1000)
}


// gc
/* closure */
function multbyten() {
    var b = 10;

    function ret(a) {
        return a * b;
    }

    return ret;
}

var x1 = multbyten();

