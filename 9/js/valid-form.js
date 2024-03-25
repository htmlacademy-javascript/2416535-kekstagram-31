const imgUpload = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const textHashTags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

imgUpload.addEventListener('click', ()=>{
  document.addEventListener('keydown', closeFormByKey);
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
});

function closeFormByKey(evt) {
  if (evt.key === 'Escape') {
    if(textHashTags === document.activeElement || textDescription === document.activeElement){
      return;
    }
    document.body.classList.remove('modal-open');
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  }
}

function closeFormLoadByClick() {
  document.body.classList.remove('modal-open');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
}

//код для валидации формы
let hashTags = [];
const hashTag = /^#[a-zа-яё0-9]{1,19}$/i;


//первый объект валидации
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

function checkHashTag(value){
  hashTags = value.split(' ');
  if(value === ''){
    return true;
  }
  for (let i = 0; i < hashTags.length; i++){
    if(!(hashTag.test(hashTags[i])) || hashTags.length > 5){
      return false;
    }
    for (let j = 0; j < i; j++){
      if(hashTags[j] === hashTags[i]){
        return false;
      }
    }
  }
  return true;
}

pristine.addValidator(textHashTags, checkHashTag, 'sms about wrong');

//второй объект валидации
const pristineComment = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

function checkDesctiption(value){
  return value.length <= 140;
}

pristineComment.addValidator(textDescription, checkDesctiption, 'Ашибка! слишком много читать');

uploadForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  pristine.validate();
  pristineComment.validate();
});

//фокусировка на поле ввода


export {closeFormLoadByClick};
