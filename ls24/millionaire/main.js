const promise = fetch('q.json').then(res => res.json()).then((data) => {
    main(data);
}).catch(err => { throw err });

var questionsArr = []; //got all questions
var rightAnswersCount = 0;
var wrongAnswersCount = 0;
var timer;

function main(data) {
    debugger;
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let question = new Question(i, data[i].q, data[i].a, false);
        questionsArr.push(question);
    }
    newQuestion(questionsArr);
}

function Question(id, question, answersArr, played) {
    this.id = id;
    this.question = question;
    this.answersArr = answersArr;
    this.played = played;
}

function newQuestion(questionsArr) {
    //determine which questions have not been played yet
    let availableQuestions = [];
    for (let i = 0; i < questionsArr.length; i++) {
        if (!questionsArr[i].played) {
            availableQuestions.push(questionsArr[i]);
        }
    }
    if (availableQuestions.length > 0) {
        //randomize a question from availableQuestions
        let rnd = Math.floor(Math.random() * availableQuestions.length);
        let gameQuestion = new Question(availableQuestions[rnd].id, availableQuestions[rnd].question, availableQuestions[rnd].answersArr, availableQuestions[rnd].played);
        questionsArr[availableQuestions[rnd].id].played = true;
        writeQuestion(gameQuestion);
    } else {
        endGame();
    }
}

function writeQuestion(obj) {
    let container = document.getElementById('container');
    clearElement(container);
    let timer = document.createElement('div');
    timer.id = 'timer';
    setCountdown(60);
    container.appendChild(timer);
    let questionDiv = document.createElement('div');
    questionDiv.className = 'questionDiv roll-in';
    questionDiv.id = 'questionDiv';
    let questionDivSpan = document.createElement('span');
    questionDivSpan.className = 'fade-in';
    questionDivSpan.innerText = obj.question;
    questionDiv.appendChild(questionDivSpan);
    container.appendChild(questionDiv);
    let answersContainer = document.createElement('div');
    answersContainer.className = 'answersContainer';
    for (let i = 0; i < obj.answersArr.length; i++) {
        let answerDiv = document.createElement('div');
        answerDiv.className = 'answerDiv fade-in';
        answerDiv.id = 'a' + i;
        answerDiv.innerText = obj.answersArr[i].aText;
        answerDiv.addEventListener('click', function () {
            for (let i = 0; i < obj.answersArr.length; i++) {
                if (this.innerText == obj.answersArr[i].aText) {
                    if (obj.answersArr[i].isTrue) {
                        endQuestion(true);
                    } else if (!obj.answersArr[i].isTrue) {
                        endQuestion(false);
                    }
                }
            }
        });
        answersContainer.appendChild(answerDiv);
    }
    container.appendChild(answersContainer);
}

function clearElement(el) { //taken from stack overflow, but I understand it.
    var myNode = document.getElementById(el.id);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}


function endQuestion(isRight) {
    clearTimer();
    if (isRight) {
        overlay('Correct! <br> Loading next question...');
        rightAnswersCount++;
    } else if (!isRight) {
        overlay('Wrong answer! <br> Loading next question...');
        wrongAnswersCount++;
    }
}
function overlay(text) {
    let container = document.getElementById('container');
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    let textDiv = document.createElement('div');
    textDiv.innerHTML = text;
    overlay.appendChild(textDiv);
    container.appendChild(overlay);
    setTimeout(function () {
        overlay.parentNode.removeChild(overlay);
        clearTimer();
        newQuestion(questionsArr);
    }, 2000);
}

function endGame(){
    let container = document.getElementById('container');
    clearElement(container);

    let results = document.createElement('div');
    results.className = 'results';
    results.innerHTML += '<h1> Your score is </h1>';
    results.innerHTML += 'Right:'+ rightAnswersCount;
    results.innerHTML += 'Wrong:'+ wrongAnswersCount;
    container.appendChild(results);
}

function setCountdown(seconds) {
    var start = new Date;
    var countdown = Math.floor((new Date - start) / 1000, 0);
    if (countdown <= seconds) {
        timer = setInterval(function () {
            var countdown = Math.floor((new Date - start) / 1000, 0); // update
            timeElapsed = countdown;
            WriteTime(timeElapsed, seconds);
            if (timeElapsed == seconds) {
                overlay('Oops! time ran out... <br> Loading next question');
                wrongAnswersCount++;
            }
        }, 1000);
    }
}

function clearTimer() {
    clearInterval(timer);
}
function WriteTime(timeElapsed, totalTime) {
    totalTime = totalTime - timeElapsed;
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let timer = document.getElementById('timer');
    timer.innerText = seconds;
}