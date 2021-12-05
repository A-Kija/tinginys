function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('007 007 007 007 -8- 007 007 007 007');

/*
&& ===> ||
|| ===> &&
=  ===> !=
!= ===> ==
>  ===> <=
<  ===> >=
>= ===> <
<= ===> >
*/


let skaitiklis;

do {
    skaitiklis = rand(10, 25);
    console.log(skaitiklis);

} while (skaitiklis >= 12);


console.log('007 007 007 007 -8B- 007 007 007 007');

let pirstukaiB = 0;

do {
    skaitiklis = rand(10, 25);
    console.log(skaitiklis);
    pirstukaiB++;

} while (skaitiklis >= 12);

console.log('Viso ciklų:', pirstukaiB);


console.log('007 007 007 007 -8C- 007 007 007 007');
let suma7C = 0;
let skaitiklisC;
do {
    skaitiklisC = rand(10, 25);
    if (skaitiklisC > 18) { // reikia neigti i skaitiklisC <= 18
        // atmesta
    } else {
        suma7C = suma7C + skaitiklisC;
    }
} while (skaitiklisC >= 12);
console.log(suma7C);


console.log('007 007 007 007 -8D- 007 007 007 007');
let suma7D = 0;
let skaitiklisD;
let atmesta = 0;
do {
    skaitiklisD = rand(10, 25);
    if (skaitiklisD > 18) {
        atmesta++;
        console.log('atmesta===>', skaitiklisD);
    } else {
        suma7D = suma7D + skaitiklisD;
        console.log('priimta===>', skaitiklisD);
    }
} while (skaitiklisD >= 12);
console.log(suma7D, atmesta);



console.log('007 007 007 007 -8E- 007 007 007 007');
let skaitiklisE;
let poriniai = 0;
let neporiniai = 0;

do {
    skaitiklisE = rand(10, 25);
    let kazkas = skaitiklisE % 2 ? neporiniai++ : poriniai++; // FANCY WAY :)
    console.log(skaitiklisE);

} while (skaitiklisE >= 12);

console.log(poriniai, neporiniai);



console.log('007 007 007 007 -8F- 007 007 007 007');



let pirstukaiF;
let statMaza = 0;
let statDid = 0;
do {
    statDid++;
    let skaitiklisF;
    pirstukaiF = 0;
    do {
        statMaza++
        skaitiklisF = rand(10, 25);
        console.log(skaitiklisF);
        pirstukaiF++;
    } while (skaitiklisF >= 12);
    console.log('mazas prasisuko', pirstukaiF);

} while (pirstukaiF <= 20);

console.log(statMaza, statDid);