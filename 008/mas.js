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