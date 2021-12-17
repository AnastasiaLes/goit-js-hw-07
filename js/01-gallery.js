import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map( ({preview, description}) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`
).join('');
// console.log(galleryMarkup);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup); 


galleryList.addEventListener('click', onImgClick);
function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    console.log(event.target.nodeName);
    console.log(event.target);
    console.log(event.target.alt);
    
    const originalImg = galleryItems.find(element => {
        if (element.description === event.target.alt)
        return element;
    });
    console.log(originalImg.original);

    const instance = basicLightbox.create(`
    <img src="${originalImg.original}" width="800" height="600">
`)

instance.show()
}

const previewList = [];
previewList.src = galleryItems.preview;
previewList.alt = galleryItems.description;




