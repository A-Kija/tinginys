let left = false;

const kv = document.querySelector('.kvadratas');
kv.style.left = '0';

kv.addEventListener('click', function() {
    if (left) {
        kv.style.left = '0';
        left = false;
    } else {
        kv.style.left = 'calc(100% - 140px)';
        left = true;
    }
})


//---------------------------------------

const kv2 = document.querySelector('.kvadratas2');

kv2.addEventListener('click', function() {
    kv2.classList.toggle('left');
    kv2.classList.toggle('right');

})


//---------------------------------------



const kv3 = document.querySelector('.kvadratas3');
kv3.style.left = '0';

kv3.addEventListener('click', function() {
    if (kv3.dataset.leftRight == 'right') {
        kv3.style.left = '0';
        kv3.dataset.leftRight = 'left';
    } else {
        kv3.style.left = 'calc(100% - 140px)';
        kv3.dataset.leftRight = 'right';
    }
})