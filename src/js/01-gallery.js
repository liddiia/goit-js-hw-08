import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"

// Add imports above this line

import { galleryItems } from './gallery-items';


// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGalleryList(galleryItems) {

  return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    }).join('');
}
const GalleryList = createGalleryList(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', GalleryList);

const lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 500,
  captionPosition: 'top',
  captionsData: 'alt',
  docClose: 'false'
});
function onEscapeClose(evt){
    if (evt.code!=='Escape')return;
    modal.close()
  }

