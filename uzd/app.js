// 1a
const h1 = document.querySelector('h1');
h1.style.color = 'darkgreen';

// 1b
const i = document.querySelector('i');
i.classList.add('small');

// 1c
h1.classList.remove('main');

// 1d
const h2Top = document.querySelector('h1 + h2');
h2Top.classList.add('first');
h2Top.classList.remove('main');

// 1e
const spanFirst = document.querySelector('h2 span:first-child');
spanFirst.style.fontSize = '10px';
spanFirst.style.color = 'gray';


// 2a
console.log('h2 tags:', document.querySelectorAll('h2').length);

// 2b
console.log('h2 tags not first class:', document.querySelectorAll('h2:not(.first)').length);

// 2c
document.querySelectorAll('h2').forEach(tagH2 => tagH2.style.color = 'lightblue');

// 2d
document.querySelectorAll('div.prices h2').forEach(tagH2 => tagH2.classList.add('price-tag'));

// 2e
document.querySelectorAll('.new').forEach(newClass => newClass.style.textDecoration = 'underline');