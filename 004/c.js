function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('==1==');
for (let i = 0; i < 5; i++) {
    console.log('labas');
}
console.log('==2==');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('==3==');
for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}
console.log('==4==');
for (let i = 49; i <= 53; i++) {
    console.log(i);
}
console.log('==5==');
for (let i = 4; i >= 0; i--) {
    console.log(i);
}
console.log('==6==');
for (let i = 0; i <= 8; i = i + 2) {
    console.log(i);
}
console.log('==7==');
for (let i = 0; i < 5; i++) {

    console.log(rand(0, 10));

}