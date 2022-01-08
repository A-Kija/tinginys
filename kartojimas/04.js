function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hello = 'Kitty';

const helloArray = ['K', 'i', 't', 't', 'y'];

for (let i = 0; i < hello.length; i++) {
    console.log(hello[i]);
}

for (let i = 0; i < helloArray.length; i++) {
    console.log(helloArray[i]);
}


const digArray = [5, 5, 10, 10, 105, 105];


for (let i = 0; i < digArray.length; i++) {
    console.log(digArray[i]);
}

let digSum = 0;
for (let i = 0; i < digArray.length; i++) {
    if (digArray[i] > 10) {
        digSum += digArray[i];
    }
}

console.log(digSum);


let dig5 = 0;
let dig5Sum = 0;
for (let i = 0; i < digArray.length; i++) {
    if (digArray[i] > 5) {
        dig5++;
        dig5Sum += digArray[i];
    }
}

console.log(dig5Sum / dig5);

const array = [];

array.push('Mikis');
array.push('Mausas');
console.log(array);

const seas = ['BlackSea', 'CaribbeanSea', 'NorthSea', 'BalticSea'];

const randArray = [];

for (let i = 0; i < 10; i++) {

    randArray.push(rand(5, 20));
}

console.log(randArray);


let letterSum = 0;
for (let i = 0; i < seas.length; i++) {
    letterSum += seas[i].length;
}

console.log(letterSum);


for (let i = 0; i < seas.length; i++) {
    for (let k = 0; k < seas[i].length; k++) {
        console.log(seas[i][k]);
    }
}