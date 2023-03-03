// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryContainerUp = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);


galleryContainerUp.insertAdjacentHTML("afterbegin", cardsMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
            <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}
new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});