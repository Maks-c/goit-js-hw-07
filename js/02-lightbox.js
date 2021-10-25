import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
                </a>
            </li>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryItem);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

lightbox.on("show.simpleLightbox");

