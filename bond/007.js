function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('008 008 008 008 -8- 008 008 008 008');

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


console.log('008 008 008 008 -8B- 008 008 008 008');

let pirstukaiB = 0;

do {
    skaitiklis = rand(10, 25);
    console.log(skaitiklis);
    pirstukaiB++;

} while (skaitiklis >= 12);

console.log('Viso ciklų:', pirstukaiB);


console.log('008 008 008 008 -8C- 008 008 008 008');
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


console.log('008 008 008 008 -8D- 008 008 008 008');
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



console.log('008 008 008 008 -8E- 008 008 008 008');
let skaitiklisE;
let poriniai = 0;
let neporiniai = 0;

do {
    skaitiklisE = rand(10, 25);
    let kazkas = skaitiklisE % 2 ? neporiniai++ : poriniai++; // FANCY WAY :)
    console.log(skaitiklisE);

} while (skaitiklisE >= 12);

console.log(poriniai, neporiniai);



console.log('008 008 008 008 -8F- 008 008 008 008');



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



console.log('008 008 008 008 -9A- 008 008 008 008');

let random9A;
let didelis9A = 0;
let mazas9A = 0;
do {
    didelis9A++;
    random9A = rand(5, 10);
    for (let i = 0; i < random9A; i++) {
        mazas9A++;
    }
} while (random9A != 5);

console.log(didelis9A, mazas9A);


console.log('008 008 008 008 -9B- 008 008 008 008');

let random9B;
let didelis9B = 0;
let mazas9B = 0;
let trys9B = 0;
do {
    didelis9B++;
    random9B = rand(5, 10);
    for (let i = 0; i < random9B; i++) {
        mazas9B++;
    }

    if (random9B == 5) {
        trys9B++;
    }

} while (trys9B != 3);

console.log(didelis9B, mazas9B);


console.log('008 008 008 008 -9C- 008 008 008 008');

let random9C;
let didelis9C = 0;
let mazas9C = 0;
let trys9C = 0;
do {
    didelis9C++;
    random9C = rand(5, 10);
    for (let i = 0; i < random9C; i++) {
        break;
        mazas9C++;
    }

    if (random9C == 5) {
        trys9C++;
    } else {
        trys9C = 0;
    }

} while (trys9C != 3);

console.log(didelis9C, mazas9C);