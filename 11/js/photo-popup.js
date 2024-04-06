// import { objects } from './post-generating.js';
import { findObject } from './util.js';
import { fetchRequest } from './server-control.js';

const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const shownCount = document.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');
const socialCommentsLoader = document.querySelector('.social__comments-loader');

//переменная для счетчика комментариев
let j = 5;

function closePopup(evt) {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    socialComments.innerHTML = 5;
    j = 5;
    shownCount.textContent = j;
    socialCommentsLoader.classList.remove('hidden');
  }
}

function closePopupByClick() {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  socialComments.innerHTML = 5;
  j = 5;
  shownCount.textContent = j;
  socialCommentsLoader.classList.remove('hidden');
}

let photo;

function loadPopup(evt) {
  if (evt.target.tagName !== 'IMG') {
    return;
  }
  document.addEventListener('keydown', closePopup);
  evt.preventDefault();
  fetchRequest
    .then((data) => {
      photo = (findObject(data, evt.target.src));
      return photo;
    })
    .then((photoTarget) => {
      bigPicture.classList.remove('hidden');
      document.querySelector('.big-picture__img').querySelector('img').src = photoTarget.url;
      document.querySelector('.likes-count').textContent = photoTarget.likes;
      document.querySelector('.social__caption').textContent = photoTarget.description;
      socialCommentTotalCount.textContent = photoTarget.comments.length;
      if(+socialCommentTotalCount.textContent < +shownCount.textContent){
        shownCount.textContent = socialCommentTotalCount.textContent;
        socialCommentsLoader.classList.add('hidden');
      }

      document.querySelectorAll('.social__comment').forEach((comment) => {
        comment.querySelector('.social__picture').src = photoTarget.comments.avatar;
        comment.querySelector('.social__picture').alt = photoTarget.comments.name;
        comment.querySelector('.social__text').textContent = photoTarget.comments.message;
      });
      socialComments.innerHTML = '';
      for (let i = 0; i < 5 && i < photoTarget.comments.length; i++) {
        socialComments.innerHTML += `<li class="social__comment">
          <img class="social__picture" src="${photoTarget.comments[i].avatar}" alt="${photoTarget.comments[i].name}" width="35" height="35">
            <p class="social__text">${photoTarget.comments[i].message}</p>
          </li>`;
      }
    });
  document.body.classList.add('modal-open');
}

function loadComment() {
  const commentCount = socialCommentTotalCount.textContent;
  if ((+commentCount - +shownCount.textContent) <= 5) {
    for (let i = 0; i < (+commentCount - +shownCount.textContent); i++) {
      socialComments.innerHTML += `<li class="social__comment">
          <img class="social__picture" src="${photo.comments[j].avatar}" alt="${photo.comments[j].name}" width="35" height="35">
          <p class="social__text">${photo.comments[j].message}</p>
          </li>`;
      j++;
    }
    socialCommentsLoader.classList.add('hidden');
    shownCount.textContent = +shownCount.textContent + (+commentCount - +shownCount.textContent);
  } else {
    for (let i = 0; i < 5; i++) {
      socialComments.innerHTML += `<li class="social__comment">
          <img class="social__picture" src="${photo.comments[j].avatar}" alt="${photo.comments[j].name}" width="35" height="35">
          <p class="social__text">${photo.comments[j].message}</p>
          </li>`;
      j++;
    }
    shownCount.textContent = +shownCount.textContent + 5;
  }
}

export { loadPopup, closePopupByClick, loadComment };
