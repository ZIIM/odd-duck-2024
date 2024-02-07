'use strict';

function saveData(data) {
  localStorage.setItem('goatData', JSON.stringify(data));
}

function fetchData() {
return JSON.parse(localStorage.getItem('goatData'));
}

function clearData() {
  localStorage.clear();
}
