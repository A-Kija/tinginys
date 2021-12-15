// ARROW FUNCTION


const anon1 = function() {
    console.log('I`m anon No 1');
}
const anon2 = () => {
        console.log('I`m anon No 2');
    }
    // Jeigu funkcija turi VIENĄ!!!! argumentą
const anon3 = number => {
    console.log('I`m anon No 3', number);
}

// Jeigu funcja turi tik VIENĄ!!! eilutę
const anon4 = number => console.log('I`m anon No 4', number);

// Yra iškart grąžinama
const anon5 = number => number;

anon1();
anon2();
anon3(555);
anon4(333);
console.log(anon5(777));