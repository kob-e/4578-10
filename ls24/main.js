
function Animal(type, nickname) {
    var that = this;
    this.isAlive = true;
    this.nickname = nickname;
    this.feed = function() {
        this.feedLevel++;
    }
    var intervalId = setInterval(function() {
        console.log(that);
        that.feedLevel--;
        if (that.feedLevel === 0) {
            alert(that.nickname + ' is dead :(')
            that.isAlive = false;
            clearInterval(intervalId);
        }
    }, 5 * 1000)
    this.feedLevel = 10;
    this.type = type;
    this.voice = function() {
        return 'Animal voice';
    }
}

function Cat(nickname) {
    Animal.call(this, 'cat', nickname);
    this.voice = function() {
        return 'Miaow';
    }
}

function Dog(nickname) {
    Animal.call(this, 'dog', nickname);
    this.voice = function() {
        return 'How';
    }
}

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);

var d1 = new Dog('Max');
var d2 = new Dog('Buddy');
var d3 = new Dog('Coco');
var d4 = new Dog('Lucy');

var c1 = new Cat('Oliver');
var c2 = new Cat('Charlie');
var c3 = new Cat('Luna');
var c4 = new Cat('Lola');

console.log(d1);
console.log(c1);

const animals = [d1, d2, d3, d4, c1, c2, c3, c4];

function drawZoo() {
    for(let i=0 ; i < animals.length; i++) {
        const animalElement = document.createElement('section');
        animalElement.className = 'col-sm-4';
        const animalPicture = document.createElement('img');
        const animalContainer = document.createElement('div');
        const feedButton = document.createElement('button');
        const feedCounter = document.createElement('span');

        animalContainer.appendChild(feedButton);
        animalContainer.appendChild(feedCounter);

        feedButton.dataset.nickname = animals[i].nickname;
        feedButton.className = 'btn btn-success';
        feedCounter.className = 'feed-counter';
        feedCounter.dataset.nickname = animals[i].nickname;
        feedButton.addEventListener('click', feedClickEvent);
        feedButton.innerText = 'Feed';
        animalPicture.src = getImage(animals[i]);
        animalElement.appendChild(animalPicture);
        animalElement.appendChild(animalContainer);
        document.getElementById('zoo').appendChild(animalElement);
    }

    // feed status
    setInterval(function() {
        for(let i=0 ; i < animals.length; i++) {
            const element = document.querySelector('span[data-nickname="'+ animals[i].nickname + '"]');
            element.innerText = animals[i].feedLevel;
        }
    }, 1000)
}
drawZoo();



function feedClickEvent() {
    const animalNickname = this.dataset.nickname;
    const animalReference = animals.filter(a => a.nickname === animalNickname)[0];
    animalReference.feed();
    document.querySelector('span[data-nickname="'+ animalNickname + '"]').innerText = animalReference.feedLevel
}

function getImage(obj) {
    if (obj instanceof Dog) {
        return 'images/dog.jpg';
    } else if (obj instanceof Cat) {
        return 'images/dog.jpg';
    }
}