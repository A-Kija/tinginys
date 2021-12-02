function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let i;
let i = 99;


if (true) {
    console.log('hello from IF', i);
    i = 8;
    let X = 10;
    if (true) {
        console.log('hello from IF', i, X);
        i = 8;
    }
}



console.log(i);

let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
console.log('-------------- 7 -----------------');
if (!(!asilai && !karves)) {
    console.log('gyvulių yra', asilai, karves);
} else {
    console.log('gyvulių nėra', asilai, karves);
}

let color1 = rand(0, 1) ? 'red' : 'blue';
let color2 = rand(0, 1) ? 'red' : 'blue';
let color3 = rand(0, 1) ? 'red' : 'blue';
let color4 = rand(0, 1) ? 'red' : 'blue';

//OK kai 1 ir 2 vienodi arba 3 ir 4 vienodi
//NOT OK kitais atvejais
console.log(color1, color2, color3, color4);


if (color1 == color2 || color3 == color4) {
    console.log('OK');
} else {
    console.log('NOT OK');
}


//OK kai 1 ir 2 skiriasi, bet(ir) 1 ir 4 vienodi
//NOT OK kitais atvejais

if (color1 != color2 && color1 == color4) {
    console.log('OK');
} else {
    console.log('NOT OK');
}


//OK kai 1 ir 2 skiriasi, bet(ir) 1 ir 4  arba 1 ir 3 vienodi
//NOT OK kitais atvejais

if (color1 != color2 && (color1 == color4 || color1 == color3)) {
    console.log('OK');
} else {
    console.log('NOT OK');
}


//OK kai 1 yra blue, bet(ir) 2 ir 3 ir 4 vienodi
//NOT OK kitais atvejais

if (color1 == 'blue' && color2 == color3 && color2 == color4) {
    console.log('OK');
} else {
    console.log('NOT OK');
}

//OK kai 1 ir 2 skiriasi, bet(ir) 3 ir 4 vienodi
//arba OK kai 1 ir 4 yra blue
//NOT OK kitais atvejais

if ((color1 != color2 && color3 == color4) ||
    ('blue' == color1 && 'blue' == color4)) {
    console.log('OK');
} else {
    console.log('NOT OK');
}