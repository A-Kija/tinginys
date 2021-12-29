// INPUT
const buttonDone = document.querySelector('button#done');
const inputMyText = document.querySelector('input#myText');

buttonDone.addEventListener('click', () => {
    const myText = inputMyText.value;
    console.log('CLICK => ', myText);
});

inputMyText.addEventListener('input', () => {
    const myText = inputMyText.value;
    console.log('INPUT => ', myText);
});


// SELECT

const buttonSelected = document.querySelector('button#selected');
const select = document.querySelector('select');

buttonSelected.addEventListener('click', () => {
    const mySelection = select.value;
    console.log('SELECTED => ', mySelection);
});

select.addEventListener('change', () => {
    const mySelection = select.value;
    console.log('CHANGE => ', mySelection);
})