function getWeatherTemplate(callback) {
  var a = new XMLHttpRequest(); // ajax object

  // when data received
  a.addEventListener("load", function () {
    callback(this.responseText);
  });

  // what is the resource address
  a.open("GET", 'template.html');

  // invoke ajax request
  a.send();

}

function sendToWeather(template, city) {
  var url = 'weather.json';
  url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
    var obj = JSON.parse(this.responseText);
    
    template = template.replace(/{{name}}/g, obj.name);
    template = template.replace('{{temp}}', obj.main.temp);
    template = template.replace('{{lat}}', obj.coord.lat);
    template = template.replace('{{lon}}', obj.coord.lon);
    
    main.innerHTML += template;
    
    console.log(template);
    console.log(obj);
    
  });
  oReq.open("GET", url);
  oReq.send();
}

// get the template with anonymouse function callback
getWeatherTemplate(function (t) {
  // t is the html template
  const cities = ['jerusalem', 'tel aviv', 'paris', 'barcelona'];
  for(let i=0; i < cities.length; i++) {
    sendToWeather(t, cities[i]);
  }
});
