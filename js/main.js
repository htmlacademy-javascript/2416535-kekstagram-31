import {fragment} from './photo-template.js';
import { loadPopup, closePopupByClick } from './photo-popup.js';

const pictureArea = document.querySelector('.pictures');
const pictures = document.querySelector('.pictures');
const cancelBtn = document.querySelector('.big-picture__cancel');

pictureArea.appendChild(fragment);

pictures.addEventListener('click', loadPopup);
cancelBtn.addEventListener('click', closePopupByClick);
