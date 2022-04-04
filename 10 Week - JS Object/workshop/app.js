import Car from './Car.js'

const car1 = new Car(); // se apeleaza functia constructor din clasa Car
const car2 = new Car();
const car3 = new Car();

// car1.moveRight();
// car1.moveRight();
// car1.moveRight();
// car1.moveRight();

// car2.moveRight();

// Sa ascultam la event de arrow right de la tastatura

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    console.log('s-a apasat key right')
    car1.moveRight();
  }
})