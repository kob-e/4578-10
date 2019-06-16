var gameArray = ['', '', '', '', '', '', '', '', ''];

for (var i = 0; i < 9; i++) {
    document.getElementById('d' + i).addEventListener('click', gameMove);
}

// x or o
function gameMove() {
    var elementId = this.id;

    var idx = Number(elementId[1]);
    if (gameArray[idx] != '') {
        alert('Choose another cell');
    } else {
        var userChoice = prompt('X or O?');
        if (userChoice != 'x' || userChoice != 'o') {
            alert('Only x or o');
        } else {
            document.getElementById(elementId).innerText = userChoice;
            gameArray[idx] = userChoice;
            gameWin(gameArray);
        }
    }
}

function gameWin(arr) {
    if (arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x') {
        alert('x won!');
    } else if (arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o') {
        alert('x won!');
    }
}