function sendToWeather(selectedCity) {
    // 40d439259718ef3f486d5ccb188390f5
    const appid = '35cba08fc2a0b2a23a8c75372f227d50';
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&units=metric&appid=' + appid;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200) {
                var obj = JSON.parse(this.responseText)
                console.log(obj);
                weather.innerHTML += '<div class="box">' + obj.name + ': ' + obj.main.temp + '<div>';
            }
        }
    };
    req.open("GET", url);
    req.send();
}


sendToWeather('jerusalem');
sendToWeather('paris');
sendToWeather('stockholm');
sendToWeather('berlin');