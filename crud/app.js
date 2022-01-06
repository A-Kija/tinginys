/*
id
name
type 
    1. Plunksniniai
    2. Plunksniniai kamuoliniai
    3. Kamuoliniai
    4. Liūtiniai kamuoliniai
    5. Sluoksniniai
space
*/

class Cloud {

    constructor(id, name, type, space) {

        this.id = parseInt(id);
        this.name = name;
        this.space = space;

        console.log(type);

        switch (parseInt(type)) {
            case 1:
                this.type = 'Plunksniniai';
                break;
            case 2:
                this.type = 'Plunksniniai kamuoliniai';
                break;
            case 3:
                this.type = 'Kamuoliniai';
                break;
            case 4:
                this.type = 'Liūtiniai kamuoliniai';
                break;
            case 5:
                this.type = 'Sluoksniniai';
                break;
            default:
                this.type = 'Kitas';
        }
    }

}

class Db {

    constructor() {
        this.data = [];
        let data;
        data = localStorage.getItem('cloudsRegister');
        if (null === data) { // pati pradzia kai dar nera duomenu
            data = JSON.stringify([]);
            localStorage.setItem('cloudsRegister', data);
        }
        data = JSON.parse(data); // masyvas su duomenim
        data.forEach(c => {
            const cloud = new Cloud(
                c.id,
                c.name,
                c.type,
                c.space
            );
            this.data.push(cloud);
        });
    }

    getNextId = () => {
        let id;
        id = localStorage.getItem('cloudsRegisterID');
        if (null === id) { // pati pradzia kai dar nera duomenu
            id = 0;
        }
        id = parseInt(id);
        id++;
        localStorage.setItem('cloudsRegisterID', id);
        return id;
    }

    save = () => {
        const clouds = [];
        this.data.forEach(c => {
            let type;
            switch (c.type) {
                case 'Plunksniniai':
                    type = 1;
                    break;
                case 'Plunksniniai kamuoliniai':
                    type = 2;
                    break;
                case 'Kamuoliniai':
                    type = 3;
                    break;
                case 'Liūtiniai kamuoliniai':
                    type = 4;
                    break;
                case 'Sluoksniniai':
                    type = 5;
                    break;
                default:
                    type = 0;
            }
            const cloud = {
                id: c.id,
                name: c.name,
                type: type,
                space: c.space
            }
            clouds.push(cloud);
        });
        localStorage.setItem('cloudsRegister', JSON.stringify(clouds));
    }

    create = (name, type, space) => {
        const cloud = new Cloud(
            this.getNextId(),
            name,
            type,
            space
        );
        this.data.push(cloud);
        this.save();
    }

}


class CloudApp {

    static db;
    static start = () => {
        this.db = new Db();
        this.render();
        document.querySelector('#new button').addEventListener('click', () => this.new())
    }

    static new = () => {
        this.db.create(
            document.querySelector('[name=name]').value,
            document.querySelector('[name=type]').value,
            document.querySelector('[name=space]').value,
        );
        this.render();
    }

    static render = () => {
        const section = document.querySelector('#list');
        section.innerHTML = '';
        this.db.data.forEach(c => {
            const html = `
                <h3><i>ID: ${c.id}</i> ${c.name}</h3>
                <i>tipas: ${c.type}</i>
                <p>${c.space} kv. km</p>
            `;
            const div = document.createElement('div');
            div.innerHTML = html;
            section.appendChild(div);
        });
    }

}


CloudApp.start();