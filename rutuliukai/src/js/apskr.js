import { countTimer, rand, go, ballsLeft, countEmptyClicks, makeBall } from './functions';
import { section, start } from './elements';
import runEvents from './events';
export const intervalId = { id: 0 };

// kamuoliukų sugeneravimas

for (let i = 0; i < rand(5, 20); i++) {
    makeBall(i + 1);
}
export const a = document.querySelectorAll('.apskr');

// pradinių reikšmių priskyrimas
ballsLeft(a.length);
countEmptyClicks(0);
section.style.backgroundColor = 'black';
countTimer.timer('reset');


// pagrindiniai eventai
runEvents();

// pereinam per visus kamuoliukus laukiamas nugriovimas :)
a.forEach(r => {
    // pagavimo paspaudimas
    r.addEventListener('click', e => {
        e.stopPropagation();
        ballsLeft();
        r.style.display = 'none';
    });
    r.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

start.addEventListener('click', () => {
    countTimer.timer('start');
    a.forEach(r => go(r));

    // paleidžiam laikrodį
    let id = setInterval(() => {
        a.forEach(r => {
            setTimeout(() => {
                go(r);
            }, rand(0, 500));
        })
    }, 5000);
    intervalId.id = id;

});

// kamuoliukai startinėje pozicijoje
a.forEach(r => {
    go(r);
})