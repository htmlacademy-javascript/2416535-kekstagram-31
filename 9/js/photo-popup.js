import { objects } from './post-generating.js';
import { findObject } from './util.js';


function closePopup(evt) {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('.social__comments').innerHTML = 5;
  }
}

function closePopupByClick() {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('.social__comments').innerHTML = '';
  document.querySelector('.social__comment-shown-count').textContent = 5;
}

function loadPopup(evt) {
  if (evt.target.tagName !== 'IMG') {
    return;
  }
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
  document.querySelector('.social__comments').innerHTML = '';
  for (let i = 0; i < 5; i++) {
    document.querySelector('.social__comments').innerHTML += `<li class="social__comment">
      <img class="social__picture" src="${objects[i].comments.avatar()}" alt="${objects[i].comments.name()}" width="35" height="35">
        <p class="social__text">${objects[i].comments.message()}</p>
      </li>`;
  }
  document.body.classList.add('modal-open');
}

function loadComment() {
  const commentCount = document.querySelector('.social__comment-total-count').textContent;
  const shownCount = document.querySelector('.social__comment-shown-count');
  if (+shownCount.textContent >= +commentCount) {
    return;
  }
  if ((+commentCount - +shownCount.textContent) < 5) {
    for (let i = 0; i < (+commentCount - +shownCount.textContent); i++) {
      document.querySelector('.social__comments').innerHTML += `<li class="social__comment">
      <img class="social__picture" src="${objects[i].comments.avatar()}" alt="${objects[i].comments.name()}" width="35" height="35">
      <p class="social__text">${objects[i].comments.message()}</p>
      </li>`;
    }
    shownCount.textContent = +shownCount.textContent + (+commentCount - +shownCount.textContent);
  } else {
    for (let i = 0; i < 5; i++) {
      document.querySelector('.social__comments').innerHTML += `<li class="social__comment">
      <img class="social__picture" src="${objects[i].comments.avatar()}" alt="${objects[i].comments.name()}" width="35" height="35">
      <p class="social__text">${objects[i].comments.message()}</p>
      </li>`;
    }
    shownCount.textContent = +shownCount.textContent + 5;
  }
}

export { loadPopup, closePopupByClick, loadComment, closePopup };
