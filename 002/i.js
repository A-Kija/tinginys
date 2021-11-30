function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


let konvertas;

konvertas = 'false';

console.log(typeof konvertas);

console.log(Boolean(konvertas));

// false <====> 0;
// true <====> 1;

// visi skaiciai ====> true
// tik 0 ====> false

// visi stringai ===> true
// tik ''  =====> false

// true ====> zodis "true"
// true ====> zodis "false"

// > < == >= <= !=


console.log('2 > 5', 2 > 5);
console.log('14 > 5', 14 > 5);
console.log('18 == 5', 18 == 5);
console.log('18 != 5', 18 != 5);
console.log('18 >= 18', 18 >= 18);

console.log('a == a', 'a' == 'a');
console.log('a > a', 'a' > 'a');
console.log('b > a', 'b' > 'a');
console.log('az > aa', 'az' > 'aa');

console.log('a > A', 'a' > 'A');
console.log('a > B', 'a' > 'B');
console.log('a > b', 'a' > 'b');

console.log('aaa > aa ', 'aaa' > 'aa ')


console.log('18 == "18"', 18 == '18')
console.log('1 == true', 1 == true)

// === !==
console.log('18 === "18"', 18 === '18')

console.log('CHECK start');


if (2 > 5) {

    console.log('Ja ja!');

} else if (2 > 3) {

    console.log('IDK');

} else {

    console.log('Nein nein!');
}


console.log('CHECK end');

let rendomas = random(5, 10);

console.log('---------------------------');

let petras = random(3, 7);
let onute = random(5, 10);

//IFFFFFF => KAS laimejo?

//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5

//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė

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