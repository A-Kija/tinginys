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