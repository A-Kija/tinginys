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
});


// RADIO
const buttonRadio = document.querySelector('button#radio');
const radios = document.querySelectorAll('[name=fm]');

buttonRadio.addEventListener('click', () => {
    let myRadio;
    radios.forEach(r => {
        if (r.checked) {
            myRadio = r.value;
        }
    });
    console.log('CLICK RADIO => ', myRadio);
});

radios.forEach(r => {
    r.addEventListener('change', () => {
        let myRadio = r.value;
        console.log('CLICK RADIO => ', myRadio);
    })
})

//CHECKBOX