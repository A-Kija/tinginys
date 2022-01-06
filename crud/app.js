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

    delete = id => {
        id = parseInt(id);
        let index;
        this.data.forEach((c, i) => {
            if (c.id === id) {
                index = i;
            }
        });
        this.data.splice(index, 1);
        this.save();
    }

    edit = (id, name, type, space) => {
        const cloud = new Cloud(
            id,
            name,
            type,
            space
        );
        let index;
        this.data.forEach((c, i) => {
            if (c.id === id) {
                index = i;
            }
        });
        this.data[index] = cloud;
        this.save();
    }

}


class CloudApp {

    static db;
    static start = () => {
        this.db = new Db();
        this.render();
        document.querySelector('#new button').addEventListener('click', () => this.new());
        document.querySelector('#modal b').addEventListener('click', () => this.hideModal());
        document.querySelector('#modal button').addEventListener('click', () => this.edit());
    }

    static new = () => {
        const sectionNew = document.querySelector('#new');
        this.db.create(
            sectionNew.querySelector('[name=name]').value,
            sectionNew.querySelector('[name=type]').value,
            sectionNew.querySelector('[name=space]').value,
        );
        sectionNew.querySelector('[name=name]').value = '';
        sectionNew.querySelector('[name=type]').value = '0';
        sectionNew.querySelector('[name=space]').value = '';
        this.render();
    }

    static delete = e => {
        this.db.delete(e.target.dataset.id);
        this.render();
    }

    static edit = () => {
        const modal = document.querySelector('#modal');
        this.db.edit(
            parseInt(modal.dataset.id),
            modal.querySelector('[name=name]').value,
            modal.querySelector('[name=type]').value,
            modal.querySelector('[name=space]').value
        )
        this.hideModal();
        this.render();
    }

    static showModal = e => {
        const modal = document.querySelector('#modal');
        modal.style.display = null;
        const id = parseInt(e.target.dataset.id);
        modal.dataset.id = id;
        const cloud = this.db.data.filter(c => c.id === id)[0];
        let type;
        switch (cloud.type) {
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
        modal.querySelector('[name=name]').value = cloud.name;
        modal.querySelector('[name=type]').value = type;
        modal.querySelector('[name=space]').value = cloud.space;
    }

    static hideModal = e => {
        const modal = document.querySelector('#modal');
        modal.style.display = 'none';
        modal.dataset.id = null;
        modal.querySelector('[name=name]').value = '';
        modal.querySelector('[name=type]').value = '0';
        modal.querySelector('[name=space]').value = '';
    }

    static render = () => {
        const section = document.querySelector('#list');
        section.innerHTML = '';
        this.db.data.forEach(c => {
            const html = `
                <h3><i>ID: ${c.id}</i> ${c.name}</h3>
                <i>tipas: ${c.type}</i>
                <p>${c.space} kv. km</p>
                <button data-id="${c.id}" class="del">Trinti</button>
                <button data-id="${c.id}" class="edit">Redaguoti</button>
            `;
            const div = document.createElement('div');
            div.classList.add('cloud');
            div.innerHTML = html;
            section.appendChild(div);
        });
        document.querySelectorAll('button.del').forEach(b => {
            b.addEventListener('click', e => {
                this.delete(e);
            })
        });
        document.querySelectorAll('button.edit').forEach(b => {
            b.addEventListener('click', e => {
                this.showModal(e);
            })
        })
    }

}


CloudApp.start();