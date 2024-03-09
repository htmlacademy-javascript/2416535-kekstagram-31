
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

export {randomRange, IDGenerator};
