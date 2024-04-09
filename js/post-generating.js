import {randomRange, IDGenerator} from './util.js';
import {messageArray, nameArray} from './data.js';

function Posting() {
  this.id = IDGenerator(1,25);
  this.url = `photos/${this.id}.jpg`;
  this.likes = randomRange(15, 200);
  this.description = 'Описание';
  this.comments = {
    id: IDGenerator(26,125),
    avatar() {
      return `img/avatar-${randomRange(1, 6)}.svg`;
    },
    message() {
      return messageArray[randomRange(0, 5)];
    },
    name() {
      return nameArray[randomRange(0, 4)];
    }
  };
}

const objects = [];

for(let i = 0; i < 25; i++){
  objects.push(new Posting());
}

export {objects};
