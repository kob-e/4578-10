function sendToWeather(selectedCity) {
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
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