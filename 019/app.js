let body = document.querySelector('body');
let div = document.querySelector('div');
let span = document.querySelector('span');

let h1 = document.createElement('h1'); // naujas elementas
let text = document.createTextNode('Valiuo!'); // paruostas tekstas
h1.appendChild(text); // tekstas idetas i elemeta
div.appendChild(h1); // elementas idedamas i div


span.appendChild(h1);

//1,2
const ul = document.querySelector('ul');

const newLi = () => {
    const li = document.createElement('li'); // naujas elementas
    const liText = document.createTextNode('Hello, Little!'); // paruostas tekstas
    li.appendChild(liText); // tekstas idetas i elemeta
    ul.appendChild(li); // elementas idedamas i ul
    //7
    li.addEventListener('click', () => li.style.color = 'yellow');
}
newLi();

//3
for (let i = 0; i < 10; i++) {
    newLi();
}

//4
ul.querySelectorAll('li').forEach(e => e.style.color = 'red');


//5 zebro edition
ul.querySelectorAll('li').forEach((e, i) => e.style.color = i % 2 ? 'red' : 'green');
// let z = 0;
// ul.querySelectorAll('li').forEach(e => e.style.color = ++z % 2 ? 'red' : 'green');


//6 
document.querySelector('button').addEventListener('click', newLi);












console.log(div, h1);