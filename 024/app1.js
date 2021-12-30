console.log('page loaded');
const ul = document.querySelector('ul');
let data = [];

document.querySelector('#az').addEventListener('click', () => {
    ul.innerHTML = '';
    data.sort((a, b) => {
        if (a.username > b.username) {
            return 1;
        } else if (a.username < b.username) {
            return -1;
        } else {
            return 0;
        }
    });
    data.forEach(element => {
        const li = document.createElement('li');
        const html = `
            <h2>${element.username}</h2>
            <small style="color:gray;">${element.email}</small>
        `;
        li.innerHTML = html;
        ul.appendChild(li);
    });
});

document.querySelector('#za').addEventListener('click', () => {
    ul.innerHTML = '';
    data.sort((a, b) => {
        if (a.username > b.username) {
            return -1;
        } else if (a.username < b.username) {
            return 1;
        } else {
            return 0;
        }
    });
    data.forEach(element => {
        const li = document.createElement('li');
        const html = `
            <h2>${element.username}</h2>
            <small style="color:gray;">${element.email}</small>
        `;
        li.innerHTML = html;
        ul.appendChild(li);
    });
});


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(strukura => {
        console.log(strukura);
        data = strukura;
        // sort here <----
        // strukura.sort((jonas, b) => {
        //     if (jonas.username > b.username) {
        //         return 1;
        //     } else if (jonas.username < b.username) {
        //         return -1;
        //     } else {
        //         return 0;
        //     }
        // });
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


const masyvas = ['Pupsis', 'Mupsis', 'Šarikas', 'Pupsis', 'Bobikas'];
const masyvasSk = [8, 65, 78, 255, 147, 8, 744];

masyvasSk.sort((a, b) => b - a);

masyvas.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(masyvas, masyvasSk);