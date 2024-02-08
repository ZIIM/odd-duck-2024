'use strict';

let dataFromStorage = fetchData();
console.log('here is our data', dataFromStorage);
let products = [];
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

// condition that determines what state our app is in
if (dataFromStorage) {
  products = dataFromStorage;
  let product1 = products[0];
  console.log('HERE IS GOAT FROM STORAGE', product1);
  let product2 = products[1];
  let product3 = products[2];

  image1.setAttribute('src', product1.url);
  image2.setAttribute('src', product2.url);
  image3.setAttribute('src', product3.url);
  product1.timesShown++;
  image1.setAttribute('alt', product1.name);
  image2.setAttribute('alt', product2.name);
  image3.setAttribute('alt', product3.name);
  product2.timesShown++;
} else {
  let product1 = new Product('img/img/bag.jpg', 'BAG');
  let product2 = new Product('img/img/banana.jpg', 'BANANA');
  let product3 = new Product('img/img/bathroom.jpg', 'BATHROOM');
  let product4 = new Product('img/img/boots.jpg', 'BOOTS');
  let product5 = new Product('img/img/breakfast.jpg', 'BREAKFAST');
  let product6 = new Product('img/img/bubblegum.jpg', 'BUBBLEGUM');
  let product7 = new Product(img/img/chair.jpg, CHAIR);
  let product8 = new Product(img/img/cthulhu.jpg, CTHULHU);
  let product9 = new Product(img/img/dog-duck.jpg, DOG-DUCK);
  let product10 = new Product(img/img/dragon.jpg, DRAGON);
  let product11 = new Product(img/img/pen.jpg, PEN);
  let product12 = new Product(img/img/pet-sweep.jpg, PET-SWEEP);
  let product13 = new Product(img/img/scissors.jpg, SCISSORS);
  let product14 = new Product(img/img/shark.jpg, SHARK);
  let product15 = new Product(img/img/sweep.png, SWEEP);
  let product16 = new Product(img/img/tauntaun.jpg, TAUNTAUN);
  let product17 = new Product(img/img/unicorn.jpg, UNICORN);
  let product18 = new Product(img/img/water-can.jpg, WATER-CAN);
  let product19 = new Product(img/img/wine-glass.jpg, WINE-GLASS);

  products.push(
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
    product18,
    product19);

  // render the goat onto the page / add the name
  image1.setAttribute("src", product1.url);
  image1.setAttribute("alt", product1.name);
  product1.timesShown++;
  image2.setAttribute("src", product2.url);
  image2.setAttribute("alt", product2.name);
  product2.timesShown++;
  image3.setAttribute("src", product3.url);
  image3.setAttribute("alt", product3.name);
}

function Product(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
}

let productImages = document.getElementById('products');

// when might you remove the event listener from the GoatImages HTML element
// goatImages.removeEventListener()

let handleClick = function(event) {
  event.preventDefault();
  console.log(event.target.alt); // event.target -> whatever element was interacted with.

  // add 1 to number of clicks
  // search our array of products for the goat object that matched the alt
  findProducts(event.target.alt);

  // show 2 different images after a picture is clicked.
  renderNewProducts();
  currentRound = roundCount(totalRounds, currentRound);
};

productImages.addEventListener('click', handleClick);

// ROUND COUNTER
function roundCount(total, current) {
  if (current < total) {
    current++;
  } else {
    productImages.removeEventListener('click', handleClick);
    showResults();
    // render voting results
  }
  // result button goes here
  return current;
}

function showResults() {
  let list = document.getElementById('results-list');
  for (let i = 0; i < products.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `${products[i].name} had ${products[i].clicks} votes, and was seen ${products[i].timesShown} times.`;
    list.appendChild(paragraph);
  }
}

function findProducts(alt) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === alt) {
      products[i].clicks++;
    }
  }
  console.log(products);
}

function renderNewProducts() {
  // generate a random index betwee 0 and the length of our products array
  let index1 = Math.floor(Math.random() * products.length);
  let index2 = Math.floor(Math.random() * products.length);
  let index3 = Math.floor(Math.random() * products.length);
  // chat gpt for this loop to avoid dupicates in the original. just the while loop*****
  while (index1 === index2 || index1 === index3 || index2 === index3) {
    index1 = Math.floor(Math.random() * products.length);
    index2 = Math.floor(Math.random() * products.length);
    index3 = Math.floor(Math.random() * products.length);
  }
  let randomProduct1 = products[index1];
  let randomProduct2 = products[index2];
  let randomProduct3 = products[index3];

  // render the products onto the page / add the name
  // renderImage(image1, randomProduct1);
  // renderImage(image2, randomProduct2);
  // renderImage(image3, randomProduct3);
  image1.setAttribute('src', randomProduct1.url);
  image2.setAttribute('src', randomProduct2.url);
  image3.setAttribute('src', randomProduct3.url);
  image1.setAttribute('alt', randomProduct1.name);
  image2.setAttribute('alt', randomProduct2.name);
  image3.setAttribute('alt', randomProduct3.name);
}
function getNames() {
  let names = [];
  for (let i = 0; i < products.length; i++) {
    names.push(products[i].name);
  }
  return names;
}

// get an array of all timesClicked from the products array.
function getClicks() {
  let clicks = [];
  for (let i = 0; i < products.length; i++) {
    clicks.push(products[i].clicks);
  }
  return clicks;
}

// get an array of all product names from the products array.
function getViews() {
  let views = [];
  for (let i = 0; i < products.length; i++) {
    views.push(products[i].timesShown);
  }
  return views;
}

let button = document.getElementById('results-button');

button.addEventListener('click', viewChart);

// const ctx = document.getElementById('myChart');


function viewChart() {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getNames(),
      datasets: [{
        label: '# of Clicks',
        data: getClicks(),
        borderWidth: 1
      }, {
        label: '# of Views',
        data: getViews(),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
