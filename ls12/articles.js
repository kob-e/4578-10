var articlesArray = [
    {},
    {}
];

var article1 = {
    heading: 's1',
    excerpt: 'excerpt',
    content: ''
};
articlesArray.push(article1);

articlesArray.push({
    heading: 's2',
    excerpt: 'excerpt',
    content: ''
})

// articlesArray.pop();

for (var i = 0; i < articlesArray.length; i++) {
    articlesArray[i].author = "me";
    // articlesArray[i]['author'] = "me";
}

for (var i = 0; i < articlesArray.length; i++) {
    // var bg = i % 2 == 0 ? 'green' : 'blue';
    var bg = '';
    if (i % 2 == 0) {
        bg = 'bg-yellow';
    } else {
        bg = 'bg-green';
    }
    var temp = '';
    bg = '';
    temp += "<div class='" + bg + "'>";
    temp += "<h1>" + articlesArray[i].heading + "</h1>";
    temp += "<p>author: " + articlesArray[i].author + "</p>";
    temp += "<small>" + articlesArray[i].excerpt + "</small>";
    temp += "<p>" + articlesArray[i].content + "</p>";
    temp += "</div>";
    document.body.innerHTML += temp;
}

