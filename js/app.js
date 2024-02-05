'use strict';

console.log('I am loaded!!');

let goats = [];
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');

// constructor function -> 'this' is the object we are creating.
function Goat(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
}

let goat1 = new Goat('assets/images/cruisin-goat.jpg', 'Cruisin');
let goat2 = new Goat('assets/images/float-your-goat.jpg', 'Floating Goat');
let goat3 = new Goat('assets/images/goat-away.jpg', 'Goat Away');
let goat4 = new Goat('assets/images/goat-logo.png', 'Goat Logo');
let goat5 = new Goat('assets/images/goat-out-of-hand.jpg', 'Goat Hand');
let goat6 = new Goat('assets/images/kissing-goat.jpg', 'Kissing Goat');
let goat7 = new Goat('assets/images/sassy-goat.jpg', 'Sassy Goat');
let goat8 = new Goat('assets/images/smiling-goat.jpg', 'Smiling Goat');
let goat9 = new Goat('assets/images/sweater-goat.jpg', 'Sweater Goat');

goats.push(goat1, goat2, goat3, goat4, goat5, goat6, goat7, goat8, goat9);

// render the goat onto the page / add the name
image1.setAttribute('src', goat1.url);
image2.setAttribute('src', goat2.url);
image1.setAttribute('alt', goat1.name);
image2.setAttribute('alt', goat2.name);

console.log(goats);


// add an event listener that runs some code when a goat picture is clicked.
let goatImages = document.getElementById('goats');

// when might you remove the event listener from the GoatImages HTML element
// goatImages.removeEventListener()

goatImages.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event.target.alt); // event.target -> whatever element was interacted with.

  // add 1 to number of clicks
    // search our array of goats for the goat object that matched the alt
  findGoat(event.target.alt);

  // show 2 different images after a picture is clicked.
  renderNewGoats();
});

function findGoat(alt) {
  for (let i =0; i< goats.length; i++) {
    if (goats[i].name === alt) {
      goats[i].clicks++;
    }
  }
  console.log(goats);
}

function renderNewGoats() {
  // generate a random index betwee 0 and the length of our goats array
  let index1 = Math.floor(Math.random() * goats.length);
  let index2 = Math.floor(Math.random() * goats.length);
  while(index1 === index2) {
    index1 = Math.floor(Math.random() * goats.length);
    index2 = Math.floor(Math.random() * goats.length);
  }
  let randomGoat1 = goats[index1];
  let randomGoat2 = goats[index2];
  console.log(randomGoat1, randomGoat2);

  // render the goat onto the page / add the name
  image1.setAttribute('src', randomGoat1.url);
  image2.setAttribute('src', randomGoat2.url);
  image1.setAttribute('alt', randomGoat1.name);
  image2.setAttribute('alt', randomGoat2.name);
}
