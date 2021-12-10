//1. Deklaracija
function sayHello(name, count) {
    for (let i = 0; i < count; i++) {
        console.log(`Hello, ${name}!`);
    }
}

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, c) {
    console.log(eval(a + c + b));
}

function calculatorIf(a, b, c) {
    if ('-' == c) {
        console.log(a - b);
    } else if ('+' == c) {
        console.log(a + b);
    } else if ('*' == c) {
        console.log(a * b);
    } else if ('/' == c) {
        console.log(a / b);
    } else {
        console.log('error');
    }

}




console.log('Have FUN!');

const times = 25;

//2. Iškvietimas
sayHello('Martyna', 1);
sayHello('Martynai', times);
sayHello('Bobikai', 10);


sum(6, 6);
sum(18, 18);
sum(22, 0);

calculatorIf(5, 8, '/');