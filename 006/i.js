function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('************FOR X 7***********');

console.log('************KARTOJIMAS***********');
let h = 0;
let s = 0;
let buvoCiklu = 0;

for (let i = 0; i < 7; i++) {
    buvoCiklu++;
    let coin = rand(0, 1) ? 'H' : 'S';
    // 'H' == coin ? h++ : s++;
    if ('H' == coin) {
        h++;
    } else {
        s++;
    }
    console.log(coin);
}
console.log(`Rezultatas. S buvo ${s}, o H buvo ${h} Viso ciklų: ${buvoCiklu}`);

console.log('************WHILE 3 H***********');
h = 0;
s = 0;
buvoCiklu = 0;
do {
    buvoCiklu++;
    let coin = rand(0, 1) ? 'H' : 'S';
    'H' == coin ? h++ : s++;
    console.log(coin);
} while (h < 3)

console.log(`Rezultatas. S buvo ${s}, o H buvo ${h} Viso ciklų: ${buvoCiklu}`);


console.log('************Paskutinis 5***********');
let atsitiktinis;
do {
    atsitiktinis = rand(0, 10);
    console.log(atsitiktinis);
} while (atsitiktinis != 5)

console.log('************Paskutinis 5 while***********');
let atsitiktinis1;
atsitiktinis1 = rand(0, 10);
while (atsitiktinis1 != 5) {
    atsitiktinis1 = rand(0, 10);
    console.log(atsitiktinis1);
}

console.log('************8 ciklai***********');
let i = 0;
do {
    i++;
    console.log('eina ratas NR: ', i);
} while (i < 8);

console.log('************5 ifai***********');
let penkiIfai = 0;
// 0
if (penkiIfai < 3) {
    console.log('Valio!')
    penkiIfai++; // 1
}
// 1
if (penkiIfai < 3) {
    console.log('Valio!')
    penkiIfai++; // 2
}
// 2
if (penkiIfai < 3) {
    console.log('Valio!')
    penkiIfai++; // 3
}
// 3
if (penkiIfai < 3) {
    console.log('Valio!')
    penkiIfai++; // ---
}
// 3
if (penkiIfai < 3) {
    console.log('Valio!')
    penkiIfai++; // ---
}

console.log('************1 while***********');

penkiIfai = 0;
while (penkiIfai < 3) {
    console.log('Valio!')
    penkiIfai++;
}

console.log('************1 do while***********');

penkiIfai = 0;
do {
    console.log('Valio!')
    penkiIfai++;
} while (penkiIfai < 3)

console.log('************NR 9***********');

let suma9 = 0;
do {
    let randomas = rand(0, 10);
    suma9 = suma9 + randomas;
    console.log(suma9);
} while (suma9 < 100);

console.log('************NR 10***********');

let randomas10;
let prasisuko10 = 0;

do {
    randomas10 = rand(0, 10);
    prasisuko10++;
    console.log(randomas10);
} while (randomas10 != 5 && randomas10 != 7);
console.log('Prasisuko: ', prasisuko10);


console.log('************NR 11***********');

let suma11 = 0;
let ciklu11 = 0;

do {
    let randomas = rand(0, 10);
    suma11 += randomas;
    // suma11 = suma11 + randomas;
    ciklu11++;
    console.log(suma11, ciklu11);
    // } while(suma11 > 20 && ciklu11 > 11)
} while (suma11 < 20 || ciklu11 < 11)