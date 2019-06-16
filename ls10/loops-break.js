var i = 0;
var numFromUser = prompt("Play until...");
numFromUser = Number(numFromUser);
if (Number.isNaN(numFromUser)) {
    // do something
}
console.log(numFromUser);
var MAX_GAME_NUMBER = 140;
while (i < numFromUser) {
    if (++i % 7 == 0) {
        console.log(i + ' boom');
    }

    if (i >= MAX_GAME_NUMBER) {
        alert('Maxmimum for this game is ' + MAX_GAME_NUMBER);
        break;
    }
}