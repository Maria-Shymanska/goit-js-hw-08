import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerUp = document.querySelector('.gallery');
const cardsMarkup = createGalleryMark(galleryItems);

galleryContainerUp.insertAdjacentHTML('afterbegin', cardsMarkup);

function createGalleryMark(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>
`;
    })
    .join('');
}
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
