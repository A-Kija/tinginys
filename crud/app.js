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
        this.id = id;
        this.name = name;
        this.space = space;
        switch (type) {
            case 1:
                this.type = 'Plunksniniai';
            case 2:
                this.type = 'Plunksniniai kamuoliniai';
            case 3:
                this.type = 'Kamuoliniai';
            case 4:
                this.type = 'Liūtiniai kamuoliniai';
            case 5:
                this.type = 'Sluoksniniai';
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
                case 'Plunksniniai kamuoliniai':
                    type = 2;
                case 'Kamuoliniai':
                    type = 3;
                case 'Liūtiniai kamuoliniai':
                    type = 4;
                case 'Sluoksniniai':
                    type = 5;
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
        localStorage.setItem('cloudsRegister', clouds);
    }

    create = (name, type, space) => {
        const cloud = new Cloud(
            this.getNextId,
            name,
            type,
            space
        );
        this.data.push(cloud);
        this.save();
    }

}