//1. Deklaracija
function sayHello(name, count) {
    for (let i = 0; i < count; i++) {
        console.log(`Hello, ${name}!`);
    }
}

console.log('Have FUN!');

const times = 25;

//2. Iškvietimas
sayHello('Martyna', 1);
sayHello('Martynai', times);
sayHello('Bobikai', 10);