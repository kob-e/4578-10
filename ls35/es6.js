const a = (a, b) => {
    console.log(1);
    return 1;
}

const b = () => 1;


var obj = {
    name: 'hi',
    a: function () {
        debugger;
        return this.name;
    },
    b: () => {
        debugger;
        return this.name
    }
}

function logAfterSecond() {
    console.log(this)
    setTimeout(() => {
        debugger;
        console.log(this.name);
    }, 1000);
}

new logAfterSecond();

/* objects */
const a = 'b';
const myObj = {
    [a]: 'c'
}
console.log(myObj);



/* destructuring */
// object destruct
/*
const E = Math.E;
const LN2 = Math.LN2;
const PI = Math.PI;
*/
const { E, LN2, PI } = Math;

// array destruct
const numbersArray = [1, 5, 10, 15, 20];
const [First, Second] = numbersArray;

// if i want first and fourth
const [First, , , Second] = numbersArray;

const [First, ...Rest] = numbersArray;

// promise

/*
fetch('https://api.github.com').then(githubRes => {
    githubRes.json().then(gituhbJsonRes => {
        console.log(gituhbJsonRes);
    });
})
*/
const githubApi = async () => {
    const githubRes = await fetch('https://api.github.com');
    
    const gituhbJsonRes = await githubRes.json();

    console.log(gituhbJsonRes);
}
githubApi();