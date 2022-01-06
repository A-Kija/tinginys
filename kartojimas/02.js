function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const iki = rand(5, 10);
let skirtingoIlgio = '';

for (let i = 0; i < iki; i++) {
    skirtingoIlgio += 'X'
}


console.log(skirtingoIlgio);