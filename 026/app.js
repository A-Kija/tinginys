class Maisas {

    static visoBulviu = 0;

    constructor() {
        this.bulviu = 0;
    }

    deti = kiek => {
        this.bulviu += kiek;
        Maisas.visoBulviu += kiek;
    }

    kiekMaise = () => {
        console.log('maise yra: ' + this.bulviu);
    }
}

const m1 = new Maisas();
const m2 = new Maisas();
const m3 = new Maisas();
const m4 = new Maisas();

m1.deti(20);
m1.deti(20);
m2.deti(20);
m3.deti(20);
m3.deti(20);
m3.deti(20);
m4.deti(80);

m1.kiekMaise();
m2.kiekMaise();
m3.kiekMaise();

console.log(m1);

console.log('VISO: ' + Maisas.visoBulviu);

// O tai kiek is vis yra tu bulviu???