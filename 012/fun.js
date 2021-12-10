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
    console.log(eval(a + c + b)); // geriau nereikia
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

function calculatorSw(a, b, c) {
    switch (c) {
        case '-':
            console.log(a - b);
            break;
        case '+':
            console.log(a + b);
        case '*':
            console.log(a * b);
        case '/':
            console.log(a / b);
        default:
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

calculatorSw(5, 8, '+');