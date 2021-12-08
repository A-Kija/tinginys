function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('$$$$$$$$$$$$$$$$$ 1 $$$$$$$$$$$$$$$$$$$');

const pinigine = [];

for (let i = 0; i < rand(10, 30); i++) {
    pinigine.push(rand(0, 10));
    // pinigine[i] = rand(0, 10);
}

console.log(pinigine);

let pinigine2 = pinigine; // perdavimas pagal nuoroda

console.log('$$$$$$$$$$$$$$$$$ 2 $$$$$$$$$$$$$$$$$$$');

let yraPinigu = 0;
let yraPiniguFancy = 0;

for (let i = 0; i < pinigine.length; i++) {
    yraPinigu += pinigine[i];
}

pinigine.forEach(p => yraPiniguFancy += p);
console.log(yraPinigu, yraPiniguFancy);

// console.log('$$$$$$$$$$$$$$$$$ CONST $$$$$$$$$$$$$$$$$$$');

// const ja = ['katė'];

// // ja = 'Šunius';

// // ja = 'no no';

// console.log(ja);


console.log('$$$$$$$$$$$$$$$$$ 3 $$$$$$$$$$$$$$$$$$$');

let popieriniaiSuma = 0;

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        popieriniaiSuma += pinigine[i];
    }
}

console.log(popieriniaiSuma);


console.log('$$$$$$$$$$$$$$$$$ 4 $$$$$$$$$$$$$$$$$$$');

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 5) {
        pinigine[i] = 0;
    }
}