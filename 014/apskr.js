const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let intViewportHeight = window.innerHeight - 100;
let intViewportWidth = window.innerWidth - 100;

const go = () => {
    a.style.left = rand(0, intViewportWidth) + 'px';
    a.style.top = rand(0, intViewportHeight) + 'px';
}

const a = document.querySelector('.apskr');
const rezDiv = document.querySelector('.rez');
let rez = 0;
rezDiv.innerText = rez;

const reset = document.querySelector('button');
reset.addEventListener('click', e => {
    e.stopPropagation();
    rez = 0;
    rezDiv.innerText = rez;
    a.style.display = null;
});


a.addEventListener('click', e => {
    e.stopPropagation();
    a.style.display = 'none';
});


document.querySelector('body').addEventListener('click', () => {
    rezDiv.innerText = ++rez;
})

setInterval(go, 1000);
go();