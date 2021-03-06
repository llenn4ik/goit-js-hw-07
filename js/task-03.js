'use strict';
// import ".style.css";
const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
// const galleryList = document.querySelector('#gallery');
// galleryList.append(...createList(images));
// galleryList.classList.add('container');
// galleryList.classList.add('list');
const galleryImages = document.querySelector('#gallery');
galleryImages.classList.add('list');
galleryImages.classList.add('container');

const createListImages = images.map((im) => {
    const li = document.createElement('li');
    li.insertAdjacentHTML(
        'beforeend',
        `<img src=${im.url} alt=${im.alt.replace(/ /g, '-')} width=420 height=250>`,
    );
    return li;
});
galleryImages.append(...createListImages);

