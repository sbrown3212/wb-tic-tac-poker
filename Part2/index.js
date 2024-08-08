const idInput = document.querySelector('#id');
const colorInput = document.querySelector('#style');

function setCard() {
    // QUESTION: When do I use .value and when do I use .innerText?
    const card = document.querySelector(`#${idInput.value}`);
    console.log(card);
}

document.querySelector('#editCardButton').addEventListener('click', setCard)

console.log(idInput)