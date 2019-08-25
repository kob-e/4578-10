function sendToWeather(selectedCity) {
    return new Promise((rs, rj) => {
        // 40d439259718ef3f486d5ccb188390f5
        const appid = '35cba08fc2a0b2a23a8c75372f227d50';
        url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&units=metric&appid=' + appid;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    var obj = JSON.parse(this.responseText)
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


sendToWeather('jerusalem').then(data => {
    weather.innerHTML += '<div class="box">' + data.name + ': ' + data.temp + '<div>';
});
sendToWeather('paris').then(data => {
    weather.innerHTML += '<div class="box">' + data.name + ': ' + data.temp + '<div>';
});
sendToWeather('stockholm').then(data => {
    weather.innerHTML += '<div class="box">' + data.name + ': ' + data.temp + '<div>';
});
sendToWeather('berlin').then(data => {
    weather.innerHTML += '<div class="box">' + data.name + ': ' + data.temp + '<div>';
});