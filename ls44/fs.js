const fs = require('fs');
const os = require('os');

fs.readFile('words.txt', function (e, data) {
    if (e) {
        console.log(e);
        return;
    }
    console.log(data.toString());
});

fs.appendFile('words.txt', 'hello' + os.EOL, function (e, s) {
    if (e) console.log(e)
    else console.log(s);
})
