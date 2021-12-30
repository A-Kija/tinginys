console.log('page loaded');
const ul = document.querySelector('ul');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(strukura => {
        console.log(strukura);
        strukura.forEach(element => {
            const li = document.createElement('li');
            // const userName = document.createTextNode(element.username);
            // li.appendChild(userName);
            // const small = document.createElement('div');
            // small.innerText = element.email;
            // small.style.fontSize = '9px';
            // li.appendChild(small);
            const html = `
                <h2>${element.username}</h2>
                <small style="color:gray;">${element.email}</small>
            `;
            li.innerHTML = html;
            ul.appendChild(li);
        });
        // tuscia vieta
    });