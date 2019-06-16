// plants vs zombies
var plantsArray = ["Sunflower", "Peashooter", "Chomper"];
var plantsStrength = [10, 50, 100];
var zombiesArray = ["Zombie", "Buckethead", "Digger"];
var zombiesStrength = [80, 15, 5];

/**
 * 
 * @param {randomNumber} num 
 * return random number between 0 to num exclude num [0, num)
 */
function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

var plantIndex = randomNumber(plantsArray.length);
var zombieIndex = randomNumber(zombiesArray.length);

console.log(plantIndex)
console.log(zombieIndex)

if (plantsStrength[plantIndex] > zombiesStrength[zombieIndex]) {
    console.log(plantsArray[plantIndex] + ' won ' + zombiesArray[zombieIndex]);
} else if (plantsStrength[plantIndex] < zombiesStrength[zombieIndex]) {
    console.log(zombiesArray[zombieIndex] + ' won ' + plantsArray[plantIndex]);
}