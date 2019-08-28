function sendToWeather(selectedCity) {
    return new Promise((rs, rj) => {
        // 40d439259718ef3f486d5ccb188390f5
        const appid = '35cba08fc2a0b2a23a8c75372f227d50';
        url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&units=metric&appid=' + appid;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200 && selectedCity !== 'stockholm') {
                    var obj = JSON.parse(this.responseText)
                    console.log(selectedCity);
                    rs({
                        name: obj.name,
                        temp: obj.main.temp
                    });
                } else {
                    rj(req.status);
                }
            }
        };
        req.open("GET", url);
        req.send();
    });

}

/* all wait for all promises to Resolve. forEach iterate over array */
Promise.all([
    sendToWeather('jerusalem'),
    sendToWeather('paris'),
    sendToWeather('stockholm'),
    sendToWeather('berlin')
]).then(allData => allData.forEach((data, i) => weather.innerHTML += `<div data-i=${i} class="box">${data.name}: ${data.temp}<div>`))
.catch(err => console.log(err));



sendToWeather('jerusalem')
    .then(data => weather.innerHTML += `<div class="box">${data.name}: ${data.temp}<div>`)
    .then(data => sendToWeather('paris'))
    .then(data => weather.innerHTML += `<div class="box">${data.name}: ${data.temp}<div>`)
    .then(data => sendToWeather('stockholm'))
    .then(data => weather.innerHTML += `<div class="box">${data.name}: ${data.temp}<div>`)
    .then(data => sendToWeather('berlin'))
    .then(data => weather.innerHTML += `<div class="box">${data.name}: ${data.temp}<div>`)
    .catch(error => Promise.resolve(1))

 