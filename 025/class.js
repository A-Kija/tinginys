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