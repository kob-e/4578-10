/* bad idea */
function doSomething(num, success, error) {
    if (num % 2 == 0) {
        success(num);
    } else {
        error('Invalid');
    }
}

doSomething(5, function (n) {
    console.log(n)
}, function (e) {
    console.log(e)
})
/*  end bad idea */

/* the good way */
function doSomething(num, cb) {
    if (num % 2 == 0) {
        cb(null, num);
    } else {
        cb('Invalid');
    }
}

doSomething(6, function (e, n) {
    if (e) {
        console.log(e);
        return;
    }
    console.log(n)
});
/* the good way never ends */