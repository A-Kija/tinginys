import { ballsLeftDiv } from './elements';

export const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const go = r => {
    r.style.left = rand(0, window.innerWidth - 100) + 'px';
    r.style.top = rand(100, window.innerHeight - 100) + 'px';
}

export const ballsLeft = (value = false) => {
    if (false === value) {
        let valueNow = ballsLeftDiv.innerText;
        valueNow--;
        ballsLeftDiv.innerText = valueNow;
    } else {
        ballsLeftDiv.innerText = value;
    }
}