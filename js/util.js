const pageURL = 'http://127.0.0.1:5500/';

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const previousValues = [];

function IDGenerator(start, length) {

  let currentValue = randomRange(start, length);

  if (previousValues.length >= length * 2) {
    return null;
  }

  while (previousValues.includes(currentValue)) {
    currentValue = randomRange(start, length);
  }
  previousValues.push(currentValue);
  return currentValue;
}

function findObject (object, evtSrc, url = pageURL) {
  let i = 0;
  while((url + object[i].url) !== evtSrc){
    i++;
  }
  return object[i];
}

export {randomRange, IDGenerator, findObject, pageURL};
