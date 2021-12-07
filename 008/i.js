function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let siuntosDydis = 'M';


switch (siuntosDydis) {
    case 'S':
        console.log('Ar yra laisvų S');
        if (!rand(0, 2)) {
            break;
        }
    case 'M':
        console.log('Ar yra laisvų M');
        if (!rand(0, 2)) {
            break;
        }
    case 'L':
        console.log('Ar yra laisvų L');
        if (!rand(0, 2)) {
            break;
        }
    default:
        console.log('Ar yra laisvų XL');
        if (!rand(0, 2)) {
            console.log('Pilnas');
        }
}

let spalva = 'green';

if (spalva == 'red') {
    console.log('Dega raudona');
} else if (spalva == 'green') {
    console.log('Dega žalia');
} else {
    console.log('Dega geltona');
}

switch (spalva) {
    case 'red':
        console.log('Dega raudona');
        break;
    case 'green':
        console.log('Dega žalia');
        break;
    default:
        console.log('Dega geltona');
}




// if (siuntosDydis == 'S') {
//     console.log('Ar yra laisvų S');
//     console.log('Ar yra laisvų M');
//     console.log('Ar yra laisvų L');
//     console.log('Ar yra laisvų XL');
// } else if (siuntosDydis == 'M') {
//     console.log('Ar yra laisvų M');
//     console.log('Ar yra laisvų L');
//     console.log('Ar yra laisvų XL');
// } else if (siuntosDydis == 'L') {
//     console.log('Ar yra laisvų L');
//     console.log('Ar yra laisvų XL');
// } else {
//     console.log('Ar yra laisvų XL');
// }




// for (let i = 1; i <= 5; i++) {

//     console.log('Didelis sukasi kartą Nr.:', i);

//     for (let z = 1; z <= 5; z++) {
//         if (z == 3) {
//             console.log('Ooo lygu 3!');
//             continue;
//         }
//         console.log('Mažas sukasi kartą Nr.:', z);
//     }

// }

// Amzinas
// let saugiklis = 0;
// do {
//     saugiklis++;
//     if (saugiklis > 500) {
//         break;
//     }
//     console.log('bla bla');

// } while (true)