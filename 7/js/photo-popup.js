import { objects } from './post-generating.js';
import { findObject } from './util.js';

function closePopup(evt) {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    document.querySelector('.big-picture').classList.add('hidden');
  }
}

function closePopupByClick() {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
}

function loadPopup(evt) {
  document.addEventListener('keydown', closePopup);
  evt.preventDefault();

  const photoTarget = (findObject(objects, evt.target.src));

  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('.big-picture__img').querySelector('img').src = photoTarget.url;
  document.querySelector('.likes-count').textContent = photoTarget.likes;
  document.querySelector('.social__caption').textContent = photoTarget.description;
  document.querySelector('.social__comment-total-count').textContent = photoTarget.comments.id;

  document.querySelectorAll('.social__comment').forEach((comment) => {
    comment.querySelector('.social__picture').src = photoTarget.comments.avatar();
    comment.querySelector('.social__picture').alt = photoTarget.comments.name();
    comment.querySelector('.social__text').textContent = photoTarget.comments.message();
  });


  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
}

export {loadPopup, closePopupByClick};
