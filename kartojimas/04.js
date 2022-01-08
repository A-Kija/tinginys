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

let seaA = 0;
let seaE = 0;

for (let i = 0; i < seas.length; i++) {
    for (let k = 0; k < seas[i].length; k++) {
        if (seas[i][k] == 'a') {
            seaA++;
        } else if (seas[i][k] == 'e') {
            seaE++;
        }
    }
}

console.log('A: ', seaA, 'B: ', seaE);
const seasCount = [];
for (let i = 0; i < seas.length; i++) {
    seasCount.push(seas[i].length)
}
console.log(seasCount);


const seasArray = [];

for (let i = 0; i < 5; i++) {
    seasArray.push(seas);
}

console.log(seasArray);

for (let i = 0; i < seasArray.length; i++) {

    for (let k = 0; k < seasArray[i].length; k++) {

        console.log(seasArray[i][k]);

    }

}

const array5X5 = [];

for (let i = 0; i < 5; i++) {

    const array5 = [];

    for (let k = 0; k < 5; k++) {

        array5.push(rand(1, 10));
    }

    array5X5.push(array5);
}

console.log(array5X5);


const xo = [];

for (let i = 0; i < 3; i++) {

    const a3 = [];

    for (let k = 0; k < 3; k++) {

        a3.push(rand(0, 1) ? 'X' : 'O');
    }

    xo.push(a3);
}

let is = 'no';
const check = ['X', 'O'];
for (let i = 0; i < check.length; i++) {
    const a = check[i];
    if ((xo[0][0] == a && xo[1][1] == a && xo[2][2] == a) ||
        (xo[0][2] == a && xo[1][1] == a && xo[2][0] == a)) {
        is = 'yes';
        break;
    }
}

console.log(xo, is);