import {fragment} from './photo-template.js';
import {closeFormLoadByClick} from './valid-form.js';
import { loadPopup, closePopupByClick, loadComment } from './photo-popup.js';

const pictureArea = document.querySelector('.pictures');
const pictures = document.querySelector('.pictures');
const cancelBtn = document.querySelector('.big-picture__cancel');
const cancelLoadImg = document.querySelector('.img-upload__cancel');
const commentLoadBtn = document.querySelector('.social__comments-loader');

pictureArea.appendChild(fragment);

pictures.addEventListener('click', loadPopup);
cancelBtn.addEventListener('click', closePopupByClick);
cancelLoadImg.addEventListener('click', closeFormLoadByClick);
commentLoadBtn.addEventListener('click', loadComment);
