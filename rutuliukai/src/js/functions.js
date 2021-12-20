import { ballsLeftDiv, rezDiv } from './elements';

export const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const go = r => {
    r.style.left = rand(0, window.innerWidth - 100) + 'px';
    r.style.top = rand(100, window.innerHeight - 100) + 'px';
}

// ballsLeft() ===> --
// ballsLeft(0) ===> 0
// ballsLeft(10) ===> 10
export const ballsLeft = (value = false) => {
    if (false === value) {
        let valueNow = ballsLeftDiv.innerText;
        valueNow--;
        if (!valueNow) {
            countTimer.timer('stop');
        }
        ballsLeftDiv.innerText = valueNow;
    } else {
        ballsLeftDiv.innerText = value;
    }
}

export const countEmptyClicks = (value = false) => {
    if (false === value) {
        let valueNow = rezDiv.innerText;
        valueNow++;
        rezDiv.innerText = valueNow;
    } else {
        rezDiv.innerText = value;
    }
}

export const makeBall = (text = '') => {
    const div = document.createElement('div'); // naujas elementas
    const divText = document.createTextNode(text); // paruostas tekstas
    div.appendChild(divText); // tekstas idetas i elemeta
    div.classList.add('apskr');
    document.body.appendChild(div); // elementas idedamas i body
    // 8
    if (text === 8) {
        div.style.fontSize = '50px';
        div.style.fontWeight = 'bold';
    }
}

export const countTimer = {
    id: 0,
    sec: 0,
    timer: function(mode) {
        const timerEl = document.querySelector('.timer strong');
        switch (mode) {
            case 'reset':
                timerEl.innerText = '0.0';
                this.sec = 0;
                clearInterval(this.id);
                break;
            case 'start':
                this.sec = 0;
                this.id = setInterval(() => {
                    this.sec++;
                    timerEl.innerText = (this.sec / 100).toFixed(2)
                }, 10);
                break;
            case 'stop':
                clearInterval(this.id);
                break;
        }
    }
}