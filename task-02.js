'use strict';
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
//   Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().
// 
const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);

const createListItem = ingredients.map((e) => {
    const li = document.createElement('li');
    li.textContent = e;
    return li;
});
ingredientsList.append(...createListItem);