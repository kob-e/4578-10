function mtx(m, n) {
    var str = '<table>';
    for(var i=0; i < m; i++) {
        str += '<tr>';
        for (var j=0; j < n; j++) {
            str += '<td>' + (j + 1) * (i + 1) + '</td>';
        }
        str += '</tr>';
    }
    str += '</table>';
    return str;
}



var _x = document.getElementById('x');
var _y = document.getElementById('y');
document.getElementById('draw').addEventListener('click', draw);

function draw() {
    var mtxHtml = mtx(Number(_x.value), Number(_y.value));
    document.getElementById('m').innerHTML = mtxHtml;
}