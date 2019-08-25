// https://api.github.com/users/octocat

function h(callback, errCallback) {
    const rand = Math.ceil(Math.random() * 2);
    setTimeout(() => {
        console.log('hello');
        if (rand % 2 == 0)
            callback();
        else 
            errCallback();
    }, 1000);
}

function h2(callback) {
    const rand = Math.ceil(Math.random() * 2);
    setTimeout(() => {
        console.log('hello');
        if (rand % 2 == 0)
            callback(null, 1);
        else 
            errCallback('error');
    }, 1000);
}

console.log(1);
function error() {
    console.log('server error');
}
h(function() {
    console.log(2);
}, error);

h2(function(err, value) {
    if (err == null) {
        
    }
    console.log(2);
}, error);
