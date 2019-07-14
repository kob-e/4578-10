const obj = {
    a: 1,
    get b() { 
        return obj.a;
    },
    set b(x) {
        obj.a = x;
    }
}

const p = {
    _firstName: 'david',
    get firstName() {
        return p._firstName[0].toUpperCase() + p._firstName.slice(1,p._firstName.length)
    },
    set firstName(n) {
        p._firstName = n;
    }
}
 