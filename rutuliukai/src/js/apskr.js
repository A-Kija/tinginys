import { rand, go, ballsLeft, countEmptyClicks, makeBall } from './functions';
import { section } from './elements';
import runEvents from './events';

// kamuoliukų sugeneravimas

for (let i = 0; i < rand(5, 20); i++) {
    makeBall();
}
export const a = document.querySelectorAll('.apskr');

// pradinių reikšmių priskyrimas
ballsLeft(a.length);
countEmptyClicks(0);
section.style.backgroundColor = 'black';


// pagrindiniai eventai
runEvents();

// pereinam per visus kamuoliukus
a.forEach(r => {
    // pagavimo paspaudimas
    r.addEventListener('click', e => {
        e.stopPropagation();
        ballsLeft();
        r.style.display = 'none';
    });
    r.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// paleidžiam laikrodį
setInterval(() => {
    a.forEach(r => {
        setTimeout(() => {
            go(r);
        }, rand(0, 500));
    })
}, 5000);

// kamuoliukai startinėje pozicijoje
a.forEach(r => {
    go(r);
})