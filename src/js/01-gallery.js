import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerUp = document.querySelector('.gallery');
const cardsMarkup = createGalleryMark(galleryItems);

galleryContainerUp.insertAdjacentHTML('afterbegin', cardsMarkup);
galleryContainerUp.addEventListener('click', onGalleryItemsClick);

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

let instance;

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow,
    }
  );

  instance.show();
}

function onShow() {
  window.addEventListener('keydown', onEscPress);
}

function onClose() {
  window.removeEventListener('keydown', onEscPress);
}

function onEscPress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    onClose();
  }
}
