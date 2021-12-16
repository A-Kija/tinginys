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
let ballsLeft = 0;
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
});

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', e => {
        e.stopPropagation();
        a[i].style.display = 'none';
    });
}




document.querySelector('body').addEventListener('click', () => {
    rezDiv.innerText = ++rez;
})


setInterval(() => {
    for (let i = 0; i < a.length; i++) {
        setTimeout(() => {
            go(i);
        }, rand(0, 500));
    }
}, 2000);

for (let i = 0; i < a.length; i++) {
    go(i);
}