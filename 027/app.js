class Stikline {

    constructor(turis) {
        this.kiekis = 0;
        this.turis = turis;
    }

    ipilti = kiekis => {
        this.kiekis += kiekis;
        this.kiekis = Math.min(this.turis, this.kiekis);
        return this;
    }

    ispilti = () => {
        const tarpinisKiekis = this.kiekis;
        this.kiekis = 0;
        return tarpinisKiekis;
    }

    stiklinejeYra = () => {
        return this.kiekis;
    }
}

const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);


// s200.ipilti(200);
// s150.ipilti(s200.ispilti());
// s100.ipilti(s150.ispilti());


s100.ipilti(
    s150.ipilti(
        s200.ipilti(200).ispilti()
    ).ispilti()
);

console.log('200: ' + s200.stiklinejeYra());
console.log('150: ' + s150.stiklinejeYra());
console.log('100: ' + s100.stiklinejeYra());


const mapas = new Map();


mapas.set('Murka', 7);
mapas.set('Rainys', 4);
mapas.set('Barsukas', 1);


mapas.set('Rainys', 5);
console.log(mapas.has('Murka'));
// mapas.delete('Murka');

console.log(mapas.get('Barsukas'));

console.log(mapas);

mapas.forEach(a => console.log(a));

for (const value of mapas) {
    console.log(value);
}