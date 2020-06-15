'use strict';
const categories = document.querySelector('#categories');
console.log(categories);

const res = categories.children.length;
console.log(res);
const str = [...categories.children]
    .map(e => `Категория: ${e.children[0].textContent} \nКоличество элементов: ${e.children[1].children.length}`)
    .join('\n\n');
console.log(str);
console.log(categories.children[0]);



// =====================
// const titles = Array.from(document.querySelectorAll('.item h2'));


// // const titles = Array.from(document.querySelectorAll('.item h2').textContent);
// console.log(titles);

// for (let = i, i <= setItems.length, i += 1) {
//     console.log(`категория ${setItems[i].firstChild.textContent} содержит ${setItems[i].lastChild.children.length}`);

// }
// console.log(`категория ${items[i].firstChild.textContent} содержит ${items[i].lastChild.children.length}`);
// const item = document.querySelectorAll('.item ul').children;
// console.log(item);
// console.log(`категория ${setItems.firstChild.textContent} содержит ${setItems.lastChild.length}`);

// console.log(item.children);
// // const titleItem = [...item.firstChildren.textContent]

// // const item=setItems.querySelector(#item ul);
// console.log(titleItem)
// const items = [...setItems.children];