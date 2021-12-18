let body = document.querySelector('body');
let div = document.querySelector('div');
let span = document.querySelector('span');

let h1 = document.createElement('h1'); // naujas elementas
let text = document.createTextNode('Valiuo!'); // paruostas tekstas
h1.appendChild(text); // tekstas idetas i elemeta
div.appendChild(h1); // elementas idedamas i div


span.appendChild(h1);









console.log(div, h1);