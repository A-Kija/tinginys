function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Kintamuju kurimas
let x;
let y;
let rezultatas

// Vartotojas atsines savo skaicius

x = rand(1, 200);
y = rand(1, 200);



// jeigu x didesnis nei 100 -
// kitu atveju +
// Programa

if (x > 100) {
    rezultatas = x - y;
} else if (x > 50) {
    rezultatas = x / y;
} else if (x > 20) {
    rezultatas = x * y;
} else {
    rezultatas = x + y;
}


// Rezultatu isvedimas
console.log(rezultatas);

// Pradiniu duomenu isvedimas
console.log(x, y);