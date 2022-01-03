const cat = {
    name: 'Murka',
    age: 3,
    bigName: null // del TS
}

console.log(cat);


const toBig = (str) => {
    console.log(str.toUpperCase());
}

const to2 = (str1, str2) => {
    console.log(str1 + '-' + str2);
}

toBig('lalalalalalal');
to2('la', 'bla');

// deklaracija
cat.bigName = function() {
        console.log(this.name.toUpperCase());
    }
    // kvietimas
cat.bigName();

cat.addYear = function() {
    this.age++;
}

cat.addYear();
cat.addYear();
cat.addYear();

const cat2 = {
    name: 'Rainius',
    age: 2,
    bigName: function() {
        console.log(this.name.toUpperCase())
    },
    addYear: function() {
        this.age++;
    }
}


console.log(cat, cat2);