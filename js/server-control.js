import { pristine, uploadForm } from './valid-form.js';
const btnUpload = document.querySelector('.img-upload__submit');

const formData = new FormData(uploadForm);

uploadForm.addEventListener('submit', () => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })
    .then((response) => {
      btnUpload.disabled = true;
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
