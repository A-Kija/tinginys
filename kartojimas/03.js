function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const str = 'Debesėlis1118';

console.log(str[str.length - 1]);

const k = 'Kurmis';

for (let i = 0; i < k.length; i++) {
    console.log(k[i]);
}


const ap = 'apelsinas';
let aRaides = 0;

for (let i = 0; i < ap.length; i++) {
    if (ap[i] == 'a') {
        aRaides++;
    }
}

console.log('A yra:', aRaides);

const zodis = 'sanislepa';
let atvirksciasZodis = '';

for (let i = 0; i < zodis.length; i++) {
    atvirksciasZodis = zodis[i] + atvirksciasZodis;
    // atvirksciasZodis += zodis[i];
}
console.log(atvirksciasZodis);


const karabasas = 'Karabasas';
let kasAntra = '';

for (let i = 0; i < karabasas.length; i += 2) {
    kasAntra += karabasas[i];
}
console.log(kasAntra);
kasAntra = '';

for (let i = 0; i < karabasas.length; i++) {

    if (i % 2 == 0) {
        kasAntra += karabasas[i];
    }
}

console.log(kasAntra);

let aZvaigzdute = '';
for (let i = 0; i < karabasas.length; i++) {

    if (karabasas[i] == 'a') {
        aZvaigzdute += '*';
    } else {
        aZvaigzdute += karabasas[i];
    }
}

console.log(aZvaigzdute);


let a2Zvaigzdute = '';
for (let i = 0; i < karabasas.length; i++) {

    if (karabasas[i + 1] == 'a') {
        a2Zvaigzdute += '*';
    } else {
        a2Zvaigzdute += karabasas[i];
    }
}

console.log(a2Zvaigzdute);


let a1;

do {
    a1 = rand(222, 333);
} while (!(a1 % 2));

console.log(a1);


const ab = '   arakadarab';
let eilNr = -1;

do {
    eilNr++;
} while (ab[eilNr] != 'b' && ab[eilNr] != undefined);

console.log(ab.length == eilNr ? 'No B' : eilNr + 1);