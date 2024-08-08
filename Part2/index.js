const idInput = document.querySelector('#id');
const colorInput = document.querySelector('#style');

function setCard() {
    // QUESTION: When do I use .value and when do I use .innerText?
    const card = document.querySelector(`#${idInput.value}`);
    
    card.style.color = colorInput.value;
}

document.querySelector('#editCardButton').addEventListener('click', setCard)