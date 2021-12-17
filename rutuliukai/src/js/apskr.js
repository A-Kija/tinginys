import { rand } from './functions';


let intViewportHeight = window.innerHeight - 100;
let intViewportWidth = window.innerWidth - 100;

const go = r => {
    r.style.left = rand(0, intViewportWidth) + 'px';
    r.style.top = rand(100, intViewportHeight) + 'px';
}

const a = document.querySelectorAll('.apskr');

const ballsLeftDiv = document.querySelector('.counter strong');
let ballsLeft = a.length;
ballsLeftDiv.innerText = ballsLeft;

const rezDiv = document.querySelector('.clicks strong');
let rez = 0;
rezDiv.innerText = rez;

const reset = document.querySelector('button');
reset.addEventListener('click', e => {
    e.stopPropagation();
    rez = 0;
    rezDiv.innerText = rez;
    a.forEach(r => {
        r.style.display = null;
    })
    ballsLeft = a.length;
    ballsLeftDiv.innerText = ballsLeft;
});

// Pereinam per visus kamuoliukus
a.forEach(r => {
    // pagavimo paspaudimas
    r.addEventListener('click', e => {
        e.stopPropagation();
        ballsLeft--;
        ballsLeftDiv.innerText = ballsLeft;
        r.style.display = 'none';
    });
    r.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});




document.querySelector('body').addEventListener('click', () => {
    rezDiv.innerText = ++rez;
})


const intervalID = setInterval(() => {
    a.forEach(r => {
        setTimeout(() => {
            go(r);
        }, rand(0, 500));
    })
}, 5000);

// Start
a.forEach(r => {
    go(r);
})

const section = document.querySelector('section');

section.addEventListener('click', e => e.stopPropagation());
section.style.backgroundColor = 'black';