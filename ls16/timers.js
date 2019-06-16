function buildElement() {
    const rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand);
    var divElement = document.createElement('div');
    divElement.setAttribute('class', generateRandomClass());
    divElement.innerText = rand;
    document.getElementById('timers').appendChild(divElement);

    let counter = 0;
    const intervalIndex = setInterval(function() {
        counter++;
        divElement.innerText = (rand - counter);
        
        if (counter === rand) {
            divCounter--;
            clearInterval(intervalIndex);
            divElement.parentElement.removeChild(divElement);
        }
    }, 1000);
}

var divCounter = 0;
setInterval(function() {
    if (divCounter < 3) {
        buildElement();
        divCounter++;
    }
}, 1 * 1000);


function generateRandomClass() {
    var colors = ['red', 'blue', 'green'];
    return colors[Math.floor(Math.random() * colors.length)];
}