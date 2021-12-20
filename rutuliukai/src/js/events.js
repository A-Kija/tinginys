import { reset, section } from './elements';
import { a, intervalId } from './apskr';
import { ballsLeft, countEmptyClicks, countTimer } from './functions';

const runEvents = () => {
    reset.addEventListener('click', e => {
        e.stopPropagation();
        countEmptyClicks(0)
        a.forEach(r => {
            r.style.display = null;
        })
        ballsLeft(a.length);
        clearInterval(intervalId.id);
        countTimer.timer('reset');
    });

    document.querySelector('body').addEventListener('click', () => {
        countEmptyClicks();
    });

    section.addEventListener('click', e => e.stopPropagation());
}

export default runEvents;