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

    kiekYraViso = () => {
        console.log('VISO: ' + this.constructor.visoBulviu);
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
m4.kiekYraViso();

console.log(m1);



// O tai kiek is vis yra tu bulviu???


class Troleibusas {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius = keleiviuSkaicius => {
        Troleibusas.visiKeleiviai += keleiviuSkaicius;
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa = keleiviuSkaicius => {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa = keleiviuSkaicius => {
        Troleibusas.bendrasKeleiviuSkaicius(-1 * Math.min(this.keleiviuSkaicius, keleiviuSkaicius));
        this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius -= keleiviuSkaicius);
    }

    keleiviuSkaiciusVisuoseTroleibusuose = () => {
        console.log('Visais Trūlais važiuoja: ' + Troleibusas.visiKeleiviai + ' keleivių')
    }

    vaziuoja = () => {
        console.log('Trūlu važiuoja: ' + this.keleiviuSkaicius + ' keleivių')
    }
}

const t4 = new Troleibusas();
const t10 = new Troleibusas();


t4.ilipa(10);
t10.ilipa(10);
t4.ilipa(10);
t10.ilipa(10);
t4.islipa(80);

t4.keleiviuSkaiciusVisuoseTroleibusuose();