function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let kintamasis = 0;

for (let pirstukai = 0; pirstukai < 3; pirstukai++) {
    kintamasis++;
}

console.log(kintamasis);



let kintamasis10 = 0;

for (let pirstukai = 0; pirstukai < 3; pirstukai++) {
    kintamasis10 = kintamasis10 + 10;
}

console.log(kintamasis10);





for (let pirstukai = 0; pirstukai < 10; pirstukai++) {
    // Pakartojama 10 kartų
    console.log('Uzlenkta:', pirstukai);
    // 
}


let suma = 0;
let suma2 = 0;

for (let pirstukai = 0; pirstukai < 11; pirstukai++) {

    let atsitiktinis = rand(5, 15);

    if (atsitiktinis > 10) {

        suma = suma + atsitiktinis;
    } else {
        suma2 = suma2 + atsitiktinis;
    }

    console.log(atsitiktinis);

}

if (suma > suma2) {
    console.log('didieji laimėjo');
} else if (suma < suma2) {
    console.log('mažieji laimėjo');
} else {
    console.log('draugystė laimėjo');
}

console.log('suma', suma, suma2);



let stars = '';

for (let pirstukai = 0; pirstukai < 123; pirstukai++) {

    if (pirstukai % 2) {
        stars = stars + 'o';
    } else {
        stars = stars + '*';
    }

}

console.log(stars);