function matrix(n, m) {
    var twoDimmArray = [];
    for(var i=0; i < n; i++) {
        twoDimmArray[i] = [];
        for(var j=0; j < m; j++) {
            twoDimmArray[i][j] = (j+1) * (i+1);
        }
    }
    console.log(twoDimmArray);


    for(var i=0; i < twoDimmArray.length; i++) {
        var tempRow = '';
        for (var j=0; j < twoDimmArray[i].length; j++) {
            tempRow += pad(twoDimmArray[i][j]) + ' ';
        }
        console.log(tempRow);
    }
}

function pad(num) {
    if (num < 10) {
        return ' ' + num;
    }
    return num;
}






/* starts */
for (var i=10; i > 0; i-- ) {
    var row = '';
	for(var j=0; j < i; j++) {
		row += '*';
    }
	console.log(row)
}

for (var i=0; i < 10; i++ ) {
    var row = '';
	for(var j=0; j <10 - i; j++) {
		row += '*';
    }
	console.log(row);
}

for(var i=0; i < 10; i++) {
    var row = ''
    for (var j=0; j < 10; j++) {
        if (j < i) {
            continue;
        }
        row += '*';
    }
    console.log(row);
}
