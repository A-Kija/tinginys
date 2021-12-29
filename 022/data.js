// const b = { m1: [1, 2, 3], m2: [5, 7, 9] }

// const json = JSON.stringify(b);

// const jsonBack = JSON.parse(json);


// console.log(b);
// console.log(json);
// console.log(jsonBack);

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let randoms = localStorage.getItem('digits'); // gauname stringa

// Pirmas kartas
if (null === randoms) {
    randoms = [];
    localStorage.setItem('digits', JSON.stringify([]));
} else {
    randoms = JSON.parse(randoms); //is json stringo padarome struktura
}

const newRandom = rand(1, 10);
randoms.push(newRandom);

// struktura paverciam stringu ir irasome i saugykla
localStorage.setItem('digits', JSON.stringify(randoms));

// Tin vizualizacija
// console.log(JSON.parse(localStorage.getItem('digits')));




let balls = localStorage.getItem('balls'); // gauname stringa
const body = document.querySelector('body');

// Pirmas kartas
if (null === balls) {
    balls = [];
} else {
    balls = JSON.parse(balls); //is json stringo padarome struktura
}

let newBall = '#' + Math.floor(Math.random() * 16777215).toString(16);

newBall = newBall.length < 7 ? newBall + '0' : newBall;

balls.push(newBall);

// struktura paverciam stringu ir irasome i saugykla
localStorage.setItem('balls', JSON.stringify(balls));

balls.forEach(color => {
    const span = document.createElement('span');
    span.classList.add('ball');
    span.style.backgroundColor = color;
    body.appendChild(span);
});