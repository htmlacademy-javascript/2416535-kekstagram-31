//контроль размера
const [btnSmaller, scaleImg, btnBigger] = document.querySelector('.img-upload__scale').children;
//слайдер эффекты
const [original, chrome, sepia, marvin, phobos, znoy] = document.querySelector('.effects__list').children;
const imgPreview = document.querySelector('.img-upload__preview img');

const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

let scale = 100;
const charProcent = '%';

function reduceImg() {
  if(scale > 25) {
    scale -= 25;
    scaleImg.value = scale + charProcent;
    imgPreview.style.transform = `scale(${scale / 100})`;
  }
}

function increaseImg() {
  if(scale < 100){
    scale += 25;
    scaleImg.value = scale + charProcent;
    imgPreview.style.transform = `scale(${scale / 100})`;
  }
}

btnSmaller.addEventListener('click', reduceImg);
btnBigger.addEventListener('click', increaseImg);

let filter;
let rate;

noUiSlider.create(slider, {
  start: 0.1,
  step: 0.1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1,
  },
});

function onRange () {
  sliderValue.value = slider.noUiSlider.get();
  imgPreview.style.filter = `${filter}(${sliderValue.value + rate})`;
  return sliderValue.value;
}
slider.noUiSlider.on('update', onRange);

original.addEventListener('click', () => {
  slider.noUiSlider.updateOptions({
    start: 0,
    range: {
      min: 0,
      max: 0,
    }
  });
  filter = 'not';
});
chrome.addEventListener('click', () => {
  filter = 'grayscale';
  rate = '';
  slider.noUiSlider.updateOptions({
    start: 0.1,
    step: 0.1,
    range: {
      min: 0,
      max: 1,
    }
  });
});
sepia.addEventListener('click', () => {
  filter = 'sepia';
  rate = '';
  slider.noUiSlider.updateOptions({
    start: 0.1,
    step: 0.1,
    range: {
      min: 0,
      max: 1,
    }
  });
});
marvin.addEventListener('click', () => {
  filter = 'invert';
  rate = '%';
  slider.noUiSlider.updateOptions({
    start: 5,
    step: 1,
    range: {
      min: 0,
      max: 100,
    }
  });
});
phobos.addEventListener('click', () => {
  filter = 'blur';
  rate = 'px';
  slider.noUiSlider.updateOptions({
    start: 0.1,
    step: 0.1,
    range: {
      min: 0,
      max: 3,
    }
  });
});
znoy.addEventListener('click', () => {
  filter = 'brightness';
  rate = '';
  slider.noUiSlider.updateOptions({
    start: 0.1,
    step: 0.1,
    range: {
      min: 1,
      max: 3,
    }
  });
});
