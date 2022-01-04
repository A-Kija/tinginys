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


class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti = kiekis => {
        if (kiekis > 2) {
            this.popieriniaiPinigai += kiekis;
        } else {
            this.metaliniaiPinigai += kiekis;
        }
    }

    skaiciuoti = () => {
        console.log('popierius: ' + this.popieriniaiPinigai,
            'metalas: ' + this.metaliniaiPinigai,
            'bendrai visos viso: ' + (this.popieriniaiPinigai + this.metaliniaiPinigai)
        );
    }

}

const p = new Pinigine();
const p2 = new Pinigine();

p.ideti(1);
p.ideti(1);
p2.ideti(10);
p.ideti(1);
p2.ideti(10);

p.skaiciuoti();
p2.skaiciuoti();

class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa = keleiviuSkaicius => {
        this.keleiviuSkaicius += keleiviuSkaicius
    }

    islipa = keleiviuSkaicius => {
        this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius -= keleiviuSkaicius);
    }

    vaziuoja = () => {
        console.log('Trūlu važiuoja: ' + this.keleiviuSkaicius + ' keleivių')
    }
}

const t4 = new Troleibusas();

t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.ilipa(10);
t4.islipa(77);

t4.vaziuoja();