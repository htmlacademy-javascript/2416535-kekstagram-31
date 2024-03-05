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

const messageToArray = `Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;
const messageArray = messageToArray.split('\n');

const nameArray = ['Том', 'Эдит', 'Адам', 'Волета', 'Ирен'];

function Posting() {
  this.id = IDGenerator(1,25);
  this.url = `photos/${this.id}.jpg`;
  this.likes = [randomRange(15, 200)];
  this.description = 'about';
  this.comments = {
    id: IDGenerator(26,125),
    avatar: `img/avatar-${randomRange(1, 6)}.svg`,
    message: messageArray[randomRange(0, 5)],
    name: nameArray[randomRange(0, 4)],
  };
}

const objects = [];

for(let i = 0; i < 25; i++){
  objects.push(new Posting());
}
console.log(objects);
