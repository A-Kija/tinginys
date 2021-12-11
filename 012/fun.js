function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//1. Deklaracija
function sayHello(name, count) {
    for (let i = 0; i < count; i++) {
        console.log(`Hello, ${name}!`);
    }
}

function sum(a, b) {
    return a + b;
    console.log('BLA BLA');
}

function calculator(a, b, c) {
    console.log(eval(a + c + b)); // geriau nereikia
}

function calculatorIf(a, b, c) {
    if ('-' == c) {
        return a - b;
    }
    if ('+' == c) {
        return a + b;
    }
    if ('*' == c) {
        return a * b;
    }
    if ('/' == c) {
        return a / b;
    }
    return 'error';
}

function calculatorSw(a, b, c) {
    switch (c) {
        case '-':
            return a - b;
        case '+':
            return a + b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'error';
    }
}




console.log('Have FUN!');

const times = 25;

//2. Iškvietimas
// sayHello('Martyna', 1);
// sayHello('Martynai', times);
// sayHello('Bobikai', 10);


let suma1 = sum(6, 7);
console.log(suma1);
console.log(sum(18, 18));
sum(22, 0);

console.log('ja ja ===>', calculatorSw(5, 8, '-'));


function add3(a, b) {
    return [a + 3, b + 3];
}

// console.log('masyvas ===>', add3(5, 7));

let [k1, k2] = add3(10, 20);

console.log(k1, k2);

function xu() {
    const masyvas = [];
    masyvas.push('X');
    masyvas.push('U');
    return masyvas;
}
let [l1, l2] = xu();
console.log(l1, l2);


function rgb(c) {
    // const m = ['Red', 'Green', 'Blue'];
    // m.splice(m.indexOf(c), 1);
    // return m;
    return ['Red', 'Green', 'Blue'].filter(color => c != color);
}
let [color1, color2] = rgb('Blue');
console.log(color1, color2);

function neAnonimas() {
    console.log('Ura');
}

const anonimas = function() {
    console.log('Valio');
}

anonimas();
neAnonimas();

const baras = {
    alus: 'Džekas',
    kedes: rand(5, 20),
    daina: null // <=== nebūtina
};

baras.daina = function() {
    // console.log('2 gaideliai, 2 gaideliai...');
}

baras.kdd = function() {
    console.log('Šiame bare yra: ' + this.kedes + ' kedžių');
}

const baras2 = {...baras }

baras2.kedes = 1000;


baras.kdd();
baras2.kdd();


console.log(baras, baras2);