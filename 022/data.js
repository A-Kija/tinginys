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
console.log(JSON.parse(localStorage.getItem('digits')));