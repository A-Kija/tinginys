function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// let masyvas = ['jautis', 'avinas'];

// masyvas.push('kiaulė');


// masyvas.push('katė');

// masyvas.push(42);

// masyvas[0] = 'karvė';

// masyvas[2]++;

// masyvas[8000] = 'Šuo';
// masyvas.unshift('kalakutas');

// // masyvas.pop();
// // masyvas.shift();

// console.log(masyvas);

// console.log(masyvas[1]);
// console.log(masyvas[0]);

// console.log(masyvas.length);


console.log('************** 1 ***************');

let masyvas = [];

for (let i = 0; i < 30; i++) {
    let randomas = rand(5, 25);
    masyvas.push(randomas);
}
console.log(masyvas);

console.log('************** 2 A ***************');

let more10 = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        more10++;
    }
}
console.log(more10);

console.log('************** 2 A ***************');

let maxas = masyvas[0];
let maxIndex = 0;

for (let i = 1; i < masyvas.length; i++) {
    if (masyvas[i] > maxas) {
        maxas = masyvas[i];
        maxIndex = i;
    }
}

console.log(maxas, maxIndex);

console.log('************** 2 C ***************');

let poriniuSuma = 0;
for (let i = 0; i < masyvas.length; i += 2) {
    poriniuSuma += masyvas[i];
}


let poriniuSuma1 = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 == 0) {
        poriniuSuma1 += masyvas[i];
    }
}
console.log(poriniuSuma, poriniuSuma1);

console.log('************** 2 D ***************');

let naujasMasyvas1 = [];
for (let i = 0; i < masyvas.length; i++) {
    let skirtumas = masyvas[i] - i;
    naujasMasyvas1.push(skirtumas);
}
console.log(naujasMasyvas1);


console.log('************** 2 E ***************');

for (let i = 0; i < 10; i++) {
    // let randomas = rand(5, 25);
    masyvas.push(rand(5, 25));
}

console.log(masyvas);

let naujasMasyvasPoriniai = [];
let naujasMasyvasNeporiniai = [];

console.log('************** 2 F ***************');

for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 == 0) {
        naujasMasyvasPoriniai.push(masyvas[i]);
    } else {
        naujasMasyvasNeporiniai.push(masyvas[i]);
    }
}

naujasMasyvasPoriniai = [];
naujasMasyvasNeporiniai = [];

for (let i = 0; i < masyvas.length; i += 2) {
    naujasMasyvasPoriniai.push(masyvas[i]);
    naujasMasyvasNeporiniai.push(masyvas[i + 1]);
}


console.log(naujasMasyvasNeporiniai, naujasMasyvasPoriniai);


console.log('************** 2 G ***************');

for (let i = 0; i < masyvas.length; i += 2) {
    if (masyvas[i] > 15) {
        masyvas[i] = 0;
    }
}
console.log(masyvas);

console.log('************** 2 H ***************');

let pirmaDaugiau;

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        pirmaDaugiau = i;
        break;
    }
}

let pirmaDaugiau2;
let index = 0;
do {
    if (masyvas[index] > 10) {
        pirmaDaugiau2 = index;
    }
    index++;
} while (typeof pirmaDaugiau2 == 'undefined' && index <= masyvas.length)

console.log(pirmaDaugiau, pirmaDaugiau2);

console.log('************** 3 ***************');

let raides = ['A', 'B', 'C', 'D'];
let masyvas200 = [];
let raidziuKiekis = [0, 0, 0, 0];

for (let i = 0; i < 200; i++) {
    masyvas200.push(raides[rand(0, 3)]);
}

for (let i = 0; i < masyvas200.length; i++) {
    let raidesIndeksas = raides.indexOf(masyvas200[i]);
    raidziuKiekis[raidesIndeksas]++;
}


console.log(masyvas200, raidziuKiekis);