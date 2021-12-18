import { reset, section } from './elements';
import { a } from './apskr';
import { ballsLeft, countEmptyClicks } from './functions';

const runEvents = () => {
    reset.addEventListener('click', e => {
        e.stopPropagation();
        countEmptyClicks(0)
        a.forEach(r => {
            r.style.display = null;
        })
        ballsLeft(a.length);
    });

    document.querySelector('body').addEventListener('click', () => {
        countEmptyClicks();
    });

    section.addEventListener('click', e => e.stopPropagation());
}

export default runEvents;