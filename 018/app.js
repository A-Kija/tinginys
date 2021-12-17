const bitGirls = [
    'Brigita',
    'Edita',
    'Deimantė',
    'Justė',
    'Lina'
];

const bitAnimals = [
    'Bunny',
    'Cat',
    'Second Cat',
    'Dog',
    'Mouse',
    'Cacadoo'
];

const bits = [48888, 56, 897, 465, 156, 654798, 8489, 51, 654, 849, 894];

// for (let i = 0; i < bitGirls.length; i++) {
//     console.log(bitGirls[i]);
// }

// bitGirls.forEach(girl => console.log(girl));

// bitGirls.forEach(function(girl) {
//     console.log(girl)
// });


bitAnimals.forEach(animal => {
    //
    if (animal != 'Cat' && animal != 'Dog') {
        console.log(animal);
    }
    //
});

let sum = 0;

bits.forEach(d => sum += d);

console.log(sum);

bits.forEach(d => {
    if (d % 2) {
        console.log(d);
    }
})

let sumL = 0;
bits.forEach(d => {
    if (d % 2 == 0) {
        sumL++;
    }
})

console.log(sumL);

let _8 = 0;

bits.forEach(d => {
    const s = '' + d;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '8') {
            _8++;
        }
    }
})

console.log(_8);