const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let intViewportHeight = window.innerHeight - 100;
let intViewportWidth = window.innerWidth - 100;

const go = i => {
    a[i].style.left = rand(0, intViewportWidth) + 'px';
    a[i].style.top = rand(100, intViewportHeight) + 'px';
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
    for (let i = 0; i < a.length; i++) {
        a[i].style.display = null;
    }
    ballsLeft = a.length;
    ballsLeftDiv.innerText = ballsLeft;
});

// Pereinam per visus kamuoliukus
for (let i = 0; i < a.length; i++) {
    // pagavimo paspaudimas
    a[i].addEventListener('click', e => {
        e.stopPropagation();
        ballsLeft--;
        ballsLeftDiv.innerText = ballsLeft;
        a[i].style.display = 'none';
    });
    a[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}




document.querySelector('body').addEventListener('click', () => {
    rezDiv.innerText = ++rez;
})


const intervalID = setInterval(() => {
    for (let i = 0; i < a.length; i++) {
        setTimeout(() => {
            go(i);
        }, rand(0, 500));
    }
}, 2000);

for (let i = 0; i < a.length; i++) {
    go(i);
}

const section = document.querySelector('section');

section.addEventListener('click', e => e.stopPropagation());
section.style.backgroundColor = 'black';