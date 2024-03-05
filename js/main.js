import {Posting} from './post-generating.js';

const objects = [];

for(let i = 0; i < 25; i++){
  objects.push(new Posting());
}
console.log(objects);
