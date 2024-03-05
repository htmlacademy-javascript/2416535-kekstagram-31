import {randomRange, IDGenerator} from './util.js';
import {messageArray, nameArray} from './data.js';

export function Posting() {
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
