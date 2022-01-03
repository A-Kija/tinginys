const cat = {
    name: 'Murka',
    age: 3,
    bigName: null // del TS
}

console.log(cat);


const toBig = (str) => {
    console.log(str.toUpperCase());
}

toBig('lalalalalalal');

cat.bigName = function() {
    console.log(this.name.toUpperCase());
}

cat.bigName();