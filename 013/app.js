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


setInterval(doDisco, 1000);