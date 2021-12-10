function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const object = {};
const array = [];

array[0] = 'Jonas';
array.push('Janina');

object.vyras = 'Jonas';
object.moteris = 'Janina';

object.president = 'Nausėda';


console.log(object, array);

console.log(object.vyras, array[0]);

const namas = {};

namas.stogas = {};

// namas.siena = {};

namas.stogas.antena = "Antena";

namas.stogas.kaminas = [];

for (let i = 1; i <= 100; i++) {
    namas.stogas.kaminas.push('Plyta Nr.: ' + i);
}



console.log(namas);

/*
Kvartalas

Reikia sukurti 33 namų kvartalą. kvartalas yra masyvas;
Kiekvienas namas kvartale yra objektas.
Kiekvienas namas turi number, color, hasDog
number skaičiai nuo 1 iki 33 iš eilės
color random iš 'red', 'blue', 'ugly'
hasDog random true arba false
*/


const colors = ['red', 'blue', 'ugly'];
const kvartalas = [];
for (let i = 0; i < 33; i++) {
    kvartalas[i] = {};
    kvartalas[i].number = i + 1;
    kvartalas[i].color = colors[rand(0, 2)];
    kvartalas[i].hasDog = !rand(0, 1);
}

const dogs = ['Pifa', 'Šarikas', 'Bobikė', 'Šuo Laika kosmonautas', 'Brisius'];
for (let i = 0; i < kvartalas.length; i++) {
    if (kvartalas[i].hasDog) {
        kvartalas[i].dogName = dogs[rand(0, dogs.length - 1)];
    }
}

let dogCounter = 0;
for (let i = 0; i < kvartalas.length; i++) {
    if (kvartalas[i].hasDog === true) {
        dogCounter++;
    }
}


const colorCounter = { ugly: 0, blue: 0, red: 0 };
let maxColor;
let maxColorFancy;
for (let i = 0; i < kvartalas.length; i++) {
    const color = kvartalas[i].color;
    colorCounter[color]++;
    // jeigu color == ugly
    // colorCounter.ugly
}

if (colorCounter.ugly > colorCounter.blue && colorCounter.ugly > colorCounter.red) {
    maxColor = 'ugly';
} else if (colorCounter.blue > colorCounter.ugly && colorCounter.blue > colorCounter.red) {
    maxColor = 'blue';
} else {
    maxColor = 'red';
}

const fancy = [];
fancy[colorCounter.ugly] = 'ugly';
fancy[colorCounter.blue] = 'blue';
fancy[colorCounter.red] = 'red';
maxColorFancy = fancy[Math.max(colorCounter.ugly, colorCounter.blue, colorCounter.red)];


// console.log(fancy);




console.log(kvartalas, dogCounter, colorCounter, maxColor, maxColorFancy);

/*
0   0
1   1
2   10
3   11
4   100
5   101
6   110
7   111
8   1000
9   1001
10  1010
11  1011
12  1100
13  1101
14  1110
15  1111

38  100110
38  0011 1000
2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
*/


let myNum = 38;