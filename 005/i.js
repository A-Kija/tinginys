function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
*/

console.log('************1A***********');

let digit1 = rand(5, 25);
let digit2 = rand(5, 25);
let digit3 = rand(5, 25);
let sum;
sum = digit1 + digit2 + digit3;
console.log(`Sumos kintamasis yra: ${sum}`);


console.log('************1B***********');
let sumString;
sumString = '' + digit1 + digit2 + digit3;
console.log(`Skaičių stringas yra: ${sumString}`);


console.log('************1C***********');
let sumString2;
sumString2 = digit1 + ' ' + digit2 + ' ' + digit3;
console.log(`Skaičių stringas su tarpais yra: ${sumString2}`);


console.log('************1D***********');
let sumString3;
sumString3 = digit1 + ' ' + digit2 + ' ' + digit3 + ' ' + sum;
console.log(`Skaičių stringas su tarpais yra: ${sumString3}`);