import {objects} from './post-generating.js';

const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

objects.forEach((object)=>{
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = object.url;
  pictureElement.querySelector('.picture__img').alt = object.description;
  pictureElement.querySelector('.picture__likes').textContent = object.likes;
  pictureElement.querySelector('.picture__comments').textContent = object.comments.id;
  fragment.appendChild(pictureElement);
});

export {fragment};
