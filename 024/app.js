console.log('page loaded');
const ul = document.querySelector('ul');
let data = [];

const render = () => {
    ul.innerHTML = '';
    data.forEach(element => {
        const li = document.createElement('li');
        const html = `
            <h2>${element.username}</h2>
            <small style="color:gray;">${element.email}</small>
        `;
        li.innerHTML = html;
        ul.appendChild(li);
    });
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(strukura => {
        console.log(strukura);
        data = strukura;
        render();
    });

document.querySelector('#az').addEventListener('click', () => {
    data.sort((a, b) => {
        if (a.username > b.username) {
            return 1;
        } else if (a.username < b.username) {
            return -1;
        } else {
            return 0;
        }
    });
    render();
});

document.querySelector('#za').addEventListener('click', () => {
    data.sort((a, b) => {
        if (a.username > b.username) {
            return -1;
        } else if (a.username < b.username) {
            return 1;
        } else {
            return 0;
        }
    });
    render();
});

document.querySelector('#add').addEventListener('click', () => {
    const programmer = {
        username: document.querySelector('#name').value,
        email: document.querySelector('#email').value
    }
    data.unshift(programmer);
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    render();
});