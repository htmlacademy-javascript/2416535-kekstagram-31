import { fetchRequest } from './server-control.js';

const imgFiltersForm = document.querySelector('.img-filters__form');
const [btn1, btn2, btn3] = imgFiltersForm.children;
const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const pictures = document.querySelector('.pictures');

function selectBtn(evt) {
  for (const btn of imgFiltersForm) {
    if (btn.classList.contains('img-filters__button--active')) {
      btn.classList.remove('img-filters__button--active');
    }
  }
  evt.target.classList.add('img-filters__button--active');
}

btn1.addEventListener('click', (evt) => {
  selectBtn(evt);
  fetchRequest
    .then((photos) => {
      photos.forEach((photo) => {
        const pictureElement = pictureTemplate.cloneNode(true);
        pictureElement.querySelector('.picture__img').src = photo.url;
        pictureElement.querySelector('.picture__img').alt = photo.description;
        pictureElement.querySelector('.picture__likes').textContent = photo.likes;
        pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
        fragment.appendChild(pictureElement);
      });
      return fragment;
    })
    .then((fragmentTemplate) => {
      pictures.querySelectorAll('.picture').forEach((n) => n.remove());
      pictures.appendChild(fragmentTemplate);
      document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    })
    .catch(() => {
      const dataError = errorTemplate.cloneNode(true);
      fragment.appendChild(dataError);
      pictures.appendChild(fragment);
      setTimeout(() => {
        pictures.removeChild(document.querySelector('.data-error'));
      }, 5000);
    });
});

btn2.addEventListener('click', (evt) => {
  selectBtn(evt);
  fetchRequest
    .then((photos) => {
      const sortedPhotos = photos.toSorted(() => 0.5 - Math.random()).slice(0, 10);
      sortedPhotos.forEach((photo) => {
        const pictureElement = pictureTemplate.cloneNode(true);
        pictureElement.querySelector('.picture__img').src = photo.url;
        pictureElement.querySelector('.picture__img').alt = photo.description;
        pictureElement.querySelector('.picture__likes').textContent = photo.likes;
        pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
        fragment.appendChild(pictureElement);
      });
      return fragment;
    })
    .then((fragmentTemplate) => {
      pictures.querySelectorAll('.picture').forEach((n) => n.remove());
      pictures.appendChild(fragmentTemplate);
      document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    })
    .catch(() => {
      const dataError = errorTemplate.cloneNode(true);
      fragment.appendChild(dataError);
      pictures.appendChild(fragment);
      setTimeout(() => {
        pictures.removeChild(document.querySelector('.data-error'));
      }, 5000);
    });
});

// function debounce (callback, timeoutDelay = 500) {
//   let timeoutId;

//   return (...rest) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
//   };
// }

btn3.addEventListener('click', (evt) => {
  selectBtn(evt);
  fetchRequest
    .then((photos) => {
      const sortedPhotos = photos.toSorted((a, b) => b.comments.length - a.comments.length);
      sortedPhotos.forEach((photo) => {
        const pictureElement = pictureTemplate.cloneNode(true);
        pictureElement.querySelector('.picture__img').src = photo.url;
        pictureElement.querySelector('.picture__img').alt = photo.description;
        pictureElement.querySelector('.picture__likes').textContent = photo.likes;
        pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
        fragment.appendChild(pictureElement);
      });
      return fragment;
    })
    .then((fragmentTemplate) => {
      pictures.querySelectorAll('.picture').forEach((n) => n.remove());
      pictures.appendChild(fragmentTemplate);
      document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    })
    .catch(() => {
      const dataError = errorTemplate.cloneNode(true);
      fragment.appendChild(dataError);
      pictures.appendChild(fragment);
      setTimeout(() => {
        pictures.removeChild(document.querySelector('.data-error'));
      }, 5000);
    });
});
