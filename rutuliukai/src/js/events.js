import { reset, section } from './elements';

const runEvents = () => {
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

    document.querySelector('body').addEventListener('click', () => {
        rezDiv.innerText = ++rez;
    });

    section.addEventListener('click', e => e.stopPropagation());
}

export default runEvents;