function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];

const cats = [];
const owners = [];

console.log('Nr 1');
for (let i = 0; i < 10; i++) {
    cats.push(rand(2, 12));
    owners.push(girls[rand(0, girls.length - 1)]);
}
console.log(`Mergaitės: ${owners} Katinukai: ${cats}`);


console.log('Nr 2');
let cats3 = 0;
for (let i = 0; i < 10; i++) {
    if (cats[i] % 3 == 0) {
        cats3 += cats[i];
    }
}
console.log(`Viso rainų katiniukų yra: ${cats3}`);

console.log('Nr 3');
owners.unshift('Nausėda');
console.log(`Mergaitės: ${owners} Katinukai: ${cats}`);


console.log('Nr 4');
const catOwners = [];
for (let i = 0; i < 10; i++) {
    catOwners.push(`${owners[i + 1]} has ${cats[i]} cats`);
}
console.log(`Mergaitės ir katinukai: ${catOwners}`);

console.log('Nr 5');
const uniqueNames = [];
let repeatName;
for (let i = 0; i < owners.length; i++) {
    if (uniqueNames.indexOf(owners[i]) == -1) {
        uniqueNames.push(owners[i]);
    } else {
        repeatName = owners[i];
        break;
    }
}
console.log(`Mergaitės su vienodu vardu: ${repeatName}`);