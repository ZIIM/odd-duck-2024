'use strict'

console.log('JS is loaded');


localStorage.setItem('productData', JSON.stringify(products)); //method of the localStorage object that takes two arguments, the key and the value

console.log('The local storage object', localStorage);

let stringFromStorage = localStorage.getItem('productData'); //method of the localStorage object that takes one argument, the key
console.log(stringFromStorage);

let object = JSON.parse(stringFromStorage);
console.log('PARSED BACK TO JS OBJECT', object);

function saveData(data) {
  localStorage.setItem('productData', JSON.stringify(data));
}

function fetchData() {
  JSON.stringify(localStorage.getItem('productData'));
}

function clearData() {
  localStorage.clear();
}
