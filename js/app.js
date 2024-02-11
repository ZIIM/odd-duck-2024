'use strict';

// function saveData(data) {
//   localStorage.setItem('goatData', JSON.stringify(data));
// }

// function fetchData() {
// return JSON.parse(localStorage.getItem('goatData'));
// }

// function clearData() {
//   localStorage.clear();
// }



localStorage.setItem('productsData', JSON.stringify(products)); //method of the localStorage object that takes two arguments, the key and the value

console.log('The local storage object', localStorage);

let stringFromStorage = localStorage.getItem('productsData'); //method of the localStorage object that takes one argument, the key
console.log(stringFromStorage);

let object = JSON.parse(stringFromStorage);
console.log('PARSED BACK TO JS OBJECT', object);

function saveData(data) {
  localStorage.setItem('productsData', JSON.stringify(data));
}

function fetchData() {
  JSON.parse(localStorage.getItem('productsData'));
}

function clearData() {
  localStorage.clear();
}
