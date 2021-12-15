const i = document.querySelectorAll('i');
const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(i);

const data = [
    { digit: '0000', color: 'black' },
    { digit: '0000', color: 'black' },
    { digit: '0000', color: 'black' },
    { digit: '0000', color: 'black' },
    { digit: '0000', color: 'black' },
    { digit: '0000', color: 'black' },
];


setInterval(() => {
    data.unshift({
        digit: rand(1000, 9999),
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });
    data.pop();
    for (t = 0; t < i.length; t++) {
        // i[t].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        i[t].innerText = data[t].digit;
        i[t].style.color = data[t].color;
    }
}, 1000);