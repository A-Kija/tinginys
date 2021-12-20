// 1
// Su forEach atspausdinti medžius
const masterArray = ['Beržas', 'Drebulė', 'Ąžuolas', 'Klevas', 'Uosis', 'Palmė', 'Agrastas', 'Eglė'];
console.log('1 =>');
masterArray.forEach(t => console.log(t));

// 2
// Suskaičiuoti, kiek visuose žodžiuose yra raidžių
let letters = 0;
masterArray.forEach(t => letters += t.length);
console.log('2 =>', letters);

// 3
// Suskaičiuoti, kiek visuose žodžiuose yra "a" raidžių.
let lettersA = 0;
masterArray.forEach(t => {
    for (let i = 0; i < t.length; i++) {
        if (t[i].toLowerCase() == 'a' || t[i] == 'Ą') {
            lettersA++;
        }
    }
});
console.log('3 =>', lettersA);


// 4
// HTML faile sukurti tagą <ul> ir į jį sudėti <li> elementus
// su masyvo medžiais
const ul = document.querySelector('ul');

masterArray.forEach(t => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(t));
    ul.appendChild(li);
})

// 5 
// Medžius turinčius savo pavadinime "a" raidę nudažyti raudonai

ul.querySelectorAll('li').forEach(li => {
    for (let i = 0; i < li.innerText.length; i++) {
        if ('a' == li.innerText[i]) {
            li.style.color = 'red';
            break;
        }
    }
})


// 6
// Suskaičiuoti, kiek section#_1 yra gėlių

const s1 = document.querySelector('#_1');
console.log(s1.querySelectorAll('p').length);


// 7
// Suskaičiuoti, kiek section#_1 gėlių pavadinuose yra raidžių (kaip nr2)


//8 
// Kiekvienos gėlės raidžių skaičių įrašyti į data-letters-count="7" atributą


//9 
// Kiekvienos gėlės raidžių skaičių įrašyti į <span> tagą ir jį įdėti į gėlės <p> tagą