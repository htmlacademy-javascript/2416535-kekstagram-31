const countLetter = (string, length) => (string.length <= length) ? true : false;


const palindromFinder = (string) => {
  let palindrom = '';
  string = string.replaceAll(' ', '').toLowerCase();
  for(let i = string.length - 1; i >= 0; i--){
    palindrom += string[i];
  }
  if(palindrom === string){
    return true;
  }
  return false;
};
