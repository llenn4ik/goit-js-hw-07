
let sumValue = 0;
//===== ID на кнопках:
// const value=document.querySelector('#value');
// const buttonIncrement=document.querySelector('#increment');
// console.log(buttonIncrement);

// buttonIncrement.addEventListener('click', function() {
//     sumValue+=1
//    value.textContent =sumValue;

//   });

// const buttonDecrement=document.querySelector('#decrement');
// buttonDecrement.addEventListener('click', function(){
//     sumValue-=1;
//     value.textContent=sumValue;
// });
// =======ID на DIV-е "Каунтер":
const ref = {
    counter: document.querySelector('#counter'),
    value: document.querySelector('#value')
}

ref.counter.addEventListener('click', function (event) {
    const {
        target
    } = event;
    if (target.nodeName !== 'BUTTON') return;
    const {
        action
    } = target.dataset;
    // вот теперь action или decrement или increment
    sumValue = action === 'increment' ? sumValue + 1 : sumValue - 1;
    // отрисуем 
    ref.value.textContent = sumValue;
})