const body = document.querySelector('body');


body.style.height = '100vh';
body.style.width = '100vw';
body.style.backgroundColor = 'pink';





const neTasDivas = document.querySelector('h1 + div');

neTasDivas.style.border = '1px solid blue';
neTasDivas.style.letterSpacing = '3px';

// neTasDivas.classList.add('big', 'suo');
// neTasDivas.classList.remove('big', 'zvirblis');



console.log(neTasDivas);

function doDisco() {
    if (body.style.backgroundColor == 'black') {
        body.style.backgroundColor = '#ff0000';
    } else {
        body.style.backgroundColor = 'black';
    }
    neTasDivas.classList.toggle('big');
    console.log('disco');
}


// setInterval(doDisco, 1000);


const africa = document.querySelector('h2');
const america = document.querySelector('h2 + h2');

console.log(africa, america);

africa.classList.add('blue');
africa.style.backgroundColor = 'green';

america.classList.add('green');
america.style.backgroundColor = 'blue';



setInterval(function() {
    africa.style.backgroundColor =
        africa.style.backgroundColor == 'green' ? 'blue' : 'green';
    america.style.backgroundColor =
        america.style.backgroundColor == 'green' ? 'blue' : 'green';
    africa.classList.toggle('blue');
    africa.classList.toggle('green');
    america.classList.toggle('blue');
    america.classList.toggle('green');
}, 500);




const button = document.querySelector('button');

button.addEventListener('click', function(e) {
    console.log('Ja ja!', e);
})




console.log(button);