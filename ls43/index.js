const fs = require('fs');
const dns = require('dns');

const NEW_LINE = '\r\n';

fs.readFile('words.txt', function (e, data) {
    const ext = '.com';
    const wordsArray = data.toString().split(NEW_LINE);
    console.log(wordsArray);
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length < 3)
            continue;
        isWebsiteAlive(wordsArray[i] + ext);
    }
})
function isWebsiteAlive(addr) {
    dns.resolve4(addr, function (e, v) {
        if (e) {
            console.log(e)
            fs.appendFileSync('available.txt', addr + NEW_LINE);
        }
        else {
            console.log(addr, 'is taken');
        }
    })
}
