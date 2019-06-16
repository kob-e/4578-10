var btn = document.getElementById('btn');
btn.addEventListener('click', addArticleToMain);

var headerElement = document.getElementById('heading');
var contentElement = document.getElementById('content');
var mainElement = document.getElementById('main');

function addArticleToMain() {
    var str = '<div>' + headerElement.value 
        + ' ' + contentElement.value + '</div>';
        mainElement.innerHTML += str;

}