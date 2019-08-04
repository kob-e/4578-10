function getWeather(callback) {
    setTimeout(function() {
        callback(1);
        console.log(1);
    }, 1000 * 0);

}
console.log(2);
getWeather(function(w) {
    document.body.innerHTML += w;
});

console.log(3);