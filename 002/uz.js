function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
console.log('-------------- 1 -----------------');
if (egzaminoRezultatas >= 4) {
    console.log('Šaunuolytė (Šaunuoliukas)', egzaminoRezultatas)
} else {
    console.log('Ateiteisi perlaikyti', egzaminoRezultatas);
}


//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
console.log('-------------- 2 -----------------');
if (eksperimentoRezultatas == 1) {
    console.log('Pavyko!', eksperimentoRezultatas);
} else if (eksperimentoRezultatas == 4) {
    console.log('Pavyko!', eksperimentoRezultatas);
} else {
    console.log('Kažkas ne taip :(', eksperimentoRezultatas);
}


//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
console.log('-------------- 3 -----------------');
if (automobilioGreitis > 60) {
    let bauda = (automobilioGreitis - 60) * 5;
    console.log('susimokam: ', bauda, automobilioGreitis);
} else {
    console.log('All OK', automobilioGreitis);
}




//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
console.log('-------------- 4 -----------------');
// if (eilesNumeris % 2 !== 0) {
if (eilesNumeris % 2) {
    console.log('Eilė neporinė', eilesNumeris);
} else {
    console.log('Eilė porinė', eilesNumeris);
}

//5.
let raideABC;
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
console.log('-------------- 5 -----------------');

let skaicius123 = rand(1, 3);

if (skaicius123 === 1) {
    raideABC = 'A';
} else if (skaicius123 === 2) {
    raideABC = 'B';
} else {
    raideABC = 'C';
}
console.log(raideABC, skaicius123);


//6.
let pirmas = rand(0, 3);
let antras = rand(0, 3);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma
console.log('-------------- 6 -----------------');
if (pirmas * antras > pirmas + antras) {
    console.log('X daugiau', pirmas, antras);
} else if (pirmas * antras < pirmas + antras) {
    console.log('+ daugiau', pirmas, antras);
} else {
    console.log('+ = X', pirmas, antras);
}

//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
console.log('-------------- 7 -----------------');
if (asilai + karves) {
    console.log('gyvulių yra', asilai, karves);
} else {
    console.log('gyvulių nėra', asilai, karves);
}

//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 
console.log('-------------- 8 -----------------');
if (dalyvis1 + dalyvis2 > 6) {
    console.log('Laimėjo', dalyvis1, dalyvis2);
} else if (dalyvis1 == dalyvis2) {
    console.log('Laimėjo', dalyvis1, dalyvis2);
} else {
    console.log('Pralaimėjo', dalyvis1, dalyvis2);
}

console.log('-------------- 8 -----------------');
if (dalyvis1 + dalyvis2 > 6 || dalyvis1 == dalyvis2) {
    console.log('Laimėjo', dalyvis1, dalyvis2);
} else {
    console.log('Pralaimėjo', dalyvis1, dalyvis2);
}



//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.
console.log('-------------- 9 -----------------');
let kiek = 0;
if (daug % 5 == 0) {
    // kiek++;
    kiek = kiek + 1;
}
if (!(daug % 10)) {
    kiek++;
}
if (!(daug % 33)) {
    kiek++;
}

console.log(kiek, daug);





//10.
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log('-------------- 10 -----------------');
console.log(as, tu);
if (as == 'popierius') {
    if (tu == 'popierius') {
        console.log('lygiosios')
    } else if (tu == 'akmuo') {
        console.log('laimėjo AS')
    } else {
        console.log('laimėjo TU')
    }
} else if (as == 'zirklės') {
    if (tu == 'popierius') {
        console.log('laimėjo AS')
    } else if (tu == 'akmuo') {
        console.log('laimėjo TU')
    } else {
        console.log('lygiosios')
    }
} else {
    if (tu == 'popierius') {
        console.log('laimėjo TU')
    } else if (tu == 'akmuo') {
        console.log('lygiosios')
    } else {
        console.log('laimėjo AS')
    }
}
console.log('---- ternary ----');

let digit = 0;

let priskirta = rand(0, 1) && rand(0, 1) ? 'green' : 'red';


let trys;
let rez = { green: 0, blue: 0, red: 0 }

for (let i = 0; i < 1000; i++) {
    trys = rand(0, 1) ? (rand(0, 1) ? 'green' : 'blue') : 'red';
    rez[trys]++;
}

console.log(rez);

console.log('----Klijai Moment----');


let spalva = 'žalias';
let preke = `Didelis
<i style="color:green;">${spalva}</i>
 fotelis`;
let kaina = 35.54;
let valiuta = 'Eur';

console.log(preke + ': ' + kaina + valiuta);


let sk1 = 4;


let sk2 = ++sk1 + sk1;

console.log(sk1, sk2);



// AND &&
// OR ||
// NOT !

console.log('1 && 1', 1 && 1);
console.log('1 && 0', 1 && 0);
console.log('0 && 1', 0 && 1);
console.log('0 && 0', 0 && 0);

console.log('1 || 1', 1 || 1);
console.log('1 || 0', 1 || 0);
console.log('0 || 1', 0 || 1);
console.log('0 || 0', 0 || 0);

console.log('!0', !0);
console.log('!1', !1);
console.log('!!1', !!1);