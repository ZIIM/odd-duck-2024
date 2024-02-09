'use strict';
// follow up on this from line 3 to line 11, help with local storage *******
localStorage.setItem('duckData', JSON.stringify(oddDucks)); //method of the localStorage object that takes two arguments, the key and the value

console.log('The local storage object', localStorage);

let stringFromStorage = localStorage.getItem('duckData'); //method of the localStorage object that takes one argument, the key
console.log(stringFromStorage);

let object = JSON.parse(stringFromStorage);
console.log('PARSED BACK TO JS OBJECT', object);


// ^^^^^^^^^^^^^^^^^


function saveData(data) {
  localStorage.setItem('goatData', JSON.stringify(data));
}

function fetchData() {
  return JSON.parse(localStorage.getItem('goatData'));
}

function clearData() {
  localStorage.clear();
}
