var url = '';
function reqListener () {
    var obj = JSON.parse(this.responseText)
    console.log(obj);
    weather.innerHTML = obj.main.temp
  }


  setInterval(sendToWeather, 3 * 1000);

  function sendToWeather() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
  }

  send.addEventListener('click', function() {
    var selectedCity = city.value;
    url = 'http://api.openweathermap.org/data/2.5/weather?q='+selectedCity+'&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
    sendToWeather();
  })
  // 1e8ffdb64b7d4d8dbdd4bf3a700bdeb0