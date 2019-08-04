
function reqListener () {
    var obj = JSON.parse(this.responseText)
    console.log(obj);
    weather.innerHTML += '<div class="box">' + obj.name + ': ' + obj.main.temp + '<div>';
  }

  function sendToWeather(selectedCity) {
    url = 'http://api.openweathermap.org/data/2.5/weather?q='+selectedCity+'&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
  }


  sendToWeather('jerusalem');
  sendToWeather('paris');
  sendToWeather('stockholm');
  sendToWeather('berlin');