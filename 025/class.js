class Cat {
    constructor(catName, catAge) {
        this.name = catName;
        this.age = catAge;
    }
    bigName = () => {
        console.log(this.name.toUpperCase());
    }
    addYear = () => {
        this.age++;
    }
    sayNames = () => {
        for (let i = 0; i < this.age; i++) {
            this.bigName();
        }
    }
}

const cat1 = new Cat('Murka', 3);
const cat2 = new Cat('Rainius', 2);
const cat3 = new Cat('Ryžius', 7);

cat3.addYear();
cat2.bigName();
cat1.sayNames();

console.log(cat1, cat2, cat3);


class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni = () => {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu = (kiekis) => {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu = () => {
        console.log('Prinkta: ' + this.akmenuKiekis);
    }
}

const k1 = new Kibiras1();

k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(7);
k1.prideti1Akmeni();

k1.kiekPririnktaAkmenu();