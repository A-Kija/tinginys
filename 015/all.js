const i = document.querySelectorAll('i');

console.log(i);



for (t = 0; t < i.length; t++) {
    i[t].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}