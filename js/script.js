'use strict';

let products = [];
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

// constructor function -> 'this' is the object we are creating.
function Product(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
}

let product1 = new Product('img/img/bag.jpg', 'BAG');
let product2 = new Product('img/img/banana.jpg', 'BANANA');
let product3 = new Product('img/img/bathroom.jpg', 'BATHROOM');
let product4 = new Product('img/img/boots.jpg', 'BOOTS');
let product5 = new Product('img/img/breakfast.jpg', 'BREAKFAST');
let product6 = new Product('img/img/bubblegum.jpg', 'BUBBLEGUM');
let product7 = new Product('img/img/chair.jpg', 'CHAIR');
let product8 = new Product('img/img/cthulhu.jpg', 'CTHULHU');
let product9 = new Product('img/img/dog-duck.jpg', 'DOG-DUCK');
let product10 = new Product('img/img/dragon.jpg', 'DRAGON');
let product11 = new Product('img/img/pen.jpg', 'PEN');
let product12 = new Product('img/img/pet-sweep.jpg', 'PET-SWEEP');
let product13 = new Product('img/img/scissors.jpg', 'SCISSORS');
let product14 = new Product('img/img/shark.jpg', 'SHARK');
let product15 = new Product('img/img/sweep.jpg', 'SWEEP');
let product16 = new Product('img/img/tauntaun.jpg', 'TAUNTAUN');
let product17 = new Product('img/img/unicorn.jpg', 'UNICORN');
let product18 = new Product('img/img/water-can.jpg', 'WATER-CAN');
let product19 = new Product('img/img/wine-glass.jpg', 'WINE-GLASS');


products.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19);

// render the prodcuts onto the page / add the name
image1.setAttribute('src', product1.url);
image2.setAttribute('src', product2.url);
image3.setAttribute('src', product3.url);
image1.setAttribute('alt', product1.name);
image2.setAttribute('alt', product2.name);
image3.setAttribute('alt', product3.name);


console.log(products);


// add an event listener that runs some code when a goat picture is clicked.
let productImages = document.getElementById('products');

// when might you remove the event listener from the GoatImages HTML element
// goatImages.removeEventListener()

productImages.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event.target.alt); // event.target -> whatever element was interacted with.

  // add 1 to number of clicks
  // search our array of goats for the goat object that matched the alt
  findProducts(event.target.alt);

  // show 2 different images after a picture is clicked.
  renderNewProducts();
});

function findProducts(alt) {
  for (let i =0; i< products.length; i++) {
    if (products[i].name === alt) {
      products[i].clicks++;
    }
  }
  console.log(products);
}

function renderNewProducts() {
  // generate a random index betwee 0 and the length of our goats array
  let index1 = Math.floor(Math.random() * products.length);
  let index2 = Math.floor(Math.random() * products.length);
  let index3 = Math.floor(Math.random() * products.length);
  // chat gpt for this loop to avoid dupicates in the original. just the while loop*****
  while(index1 === index2 || index1 === index3 || index2 === index3) {
    index1 = Math.floor(Math.random() * products.length);
    index2 = Math.floor(Math.random() * products.length);
  }
  let randomProduct1 = products[index1];
  let randomProduct2 = products[index2];
  let randomProduct3 = products[index3];
  console.log(randomProduct1, randomProduct2, randomProduct3);

  // render the products onto the page / add the name
  image1.setAttribute('src', randomProduct1.url);
  image2.setAttribute('src', randomProduct2.url);
  image3.setAttribute('src', randomProduct3.url);
  image1.setAttribute('alt', randomProduct1.name);
  image2.setAttribute('alt', randomProduct2.name);
  image3.setAttribute('alt', randomProduct3.name);
}
