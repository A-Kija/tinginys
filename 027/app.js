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