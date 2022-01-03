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

cat.bigName = function() {
    console.log(this.name.toUpperCase());
}

cat.bigName();