const greetInput = document.querySelector('#name-input');
const spanOutput = document.querySelector("#name-output");

greetInput.addEventListener('input', event => {
    spanOutput.textContent = event.currentTarget.value
});

// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), подставляет его
//  текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'