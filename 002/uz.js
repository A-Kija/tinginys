function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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

//6.
let pirmas = rand(0, 2);
let antras = rand(0, 2);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 

//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų


//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 


//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.


//10.
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu