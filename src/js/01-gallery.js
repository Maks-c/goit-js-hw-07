
import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('.gallery');
// const jsGallery = document.querySelector('.js.gallery')
const galleryItem = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link href="${original}">
    <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </div>`;
}).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryItem)


galleryRef.addEventListener('click', onSelectImage);



function onSelectImage(e) {
  
    e.preventDefault();
    if (e.target === galleryRef) {
        return
    }

    
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img  src="${e.target.dataset.source}" alt="${e.target.description}"/>
       
    </div>
`)

    instance.show()

    document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        instance.close()
        console.log(e.code);
    }

}, {once:true})
}




