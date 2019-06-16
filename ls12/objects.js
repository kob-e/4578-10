var myObj = {
    a: 1
};

myObj['b'] = 4;


myObj.a = 4;
myObj.c = 6;


var state1name = 'Israel';
var state1population = 9000000;
var state1Languages = ['Hebrew', 'Arabic', 'English'];

var state1 = {
    name: 'Israel',
    population: 9000000,
    state1Languages: ['Hebrew', 'Arabic', 'English']
}

var state2 = {
    name: 'USA',
    population: 300000000,
    state1Languages: ['Hebrew', 'Arabic', 'English']
}

var state3 = {
    population: 6000,
    state1Languages: ['Italian']
}

var states = [state1, state2, state3];
for(var i=0; i < states .length; i++) {
	console.log(states[i].name);
}