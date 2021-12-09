function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('$$$$$$$$$$$$$$$$$ 1 $$$$$$$$$$$$$$$$$$$');

const pinigine = [];

for (let i = 0; i < rand(10, 30); i++) {
    pinigine.push(rand(0, 10));
    // pinigine[i] = rand(0, 10);
}

console.log(pinigine);

let pinigine2 = pinigine; // perdavimas pagal nuoroda

console.log('$$$$$$$$$$$$$$$$$ 2 $$$$$$$$$$$$$$$$$$$');

let yraPinigu = 0;
let yraPiniguFancy = 0;

for (let i = 0; i < pinigine.length; i++) {
    yraPinigu += pinigine[i];
}

pinigine.forEach(p => yraPiniguFancy += p);
console.log(yraPinigu, yraPiniguFancy);

// console.log('$$$$$$$$$$$$$$$$$ CONST $$$$$$$$$$$$$$$$$$$');

// const ja = ['katė'];

// // ja = 'Šunius';

// // ja = 'no no';

// console.log(ja);


console.log('$$$$$$$$$$$$$$$$$ 3 $$$$$$$$$$$$$$$$$$$');

let popieriniaiSuma = 0;

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        popieriniaiSuma += pinigine[i];
    }
}

console.log(popieriniaiSuma);


console.log('$$$$$$$$$$$$$$$$$ 4 $$$$$$$$$$$$$$$$$$$');

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 5) {
        pinigine[i] = 0;
    }
}

let didReiksme = pinigine[0];
let didViso = 0;

console.log('$$$$$$$$$$$$$$$$$ 5 $$$$$$$$$$$$$$$$$$$');

for (let i = 0; i < pinigine.length; i++) {

    if (pinigine[i] > didReiksme) {
        didReiksme = pinigine[i];
        didViso = 0;
    }

    if (pinigine[i] == didReiksme) {
        didViso++;
    }

}

console.log(pinigine, 'didReiksme:', didReiksme, 'didViso:', didViso);


console.log('$$$$$$$$$$$$$$$$$ 6 $$$$$$$$$$$$$$$$$$$');

for (let i = 0; i < pinigine.length; i++) {

    // if (!pinigine[i]) {
    if (pinigine[i] == 0) {
        pinigine[i] = i;
    }

}

console.log(pinigine);


console.log('$$$$$$$$$$$$$$$$$ 7 $$$$$$$$$$$$$$$$$$$');

let truksta = 30 - pinigine.length;

if (truksta) {
    for (let i = 0; i < truksta; i++) {
        pinigine.push(rand(0, 10));
    }
}

console.log(pinigine);


console.log('$$$$$$$$$$$$$$$$$ MINI SERIES $$$$$$$$$$$$$$$$$$$');

const komoda = [];
const dezute = [];

for (let i = 0; i < 4; i++) {
    komoda.push('');
}

for (let i = 0; i < 9; i++) {
    dezute.push('');
}

dezute[2] = '@';

komoda[0] = dezute;



console.log(komoda[0][2]);


komoda[3] = [];

for (let i = 0; i < 20; i++) {
    komoda[3].push(rand(5, 17));
}

komoda[3].push(25, 18);

komoda[3].push([1, 2, 3, 4]);


// komoda[3].push([]);
// for (let i = 1; i <= 4; i++) {
//     komoda[3][22].push(i);
// }
// komoda[3][22].push(1, 2, 3, 4);


console.log(komoda);

console.log(komoda[3][22][0] + komoda[3][22][2]);


const _3X3 = [];

for (let i = 0; i < 3; i++) {
    _3X3[i] = [];
    for (let u = 0; u < 3; u++) {
        _3X3[i][u] = rand(0, 1) ? 'X' : 'O';
    }
}

let O = 0;
let X = 0;

for (let i = 0; i < 3; i++) {
    for (let u = 0; u < 3; u++) {
        _3X3[i][u] == 'X' ? X++ : O++;
    }
}

console.log(_3X3, X, O);