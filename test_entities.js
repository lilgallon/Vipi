let owl = new Owl(0, 0, 50, 50, 5.0, 10.0);

let food = new Food(50, 50, 50, 50, 1.0);
let predator = new Predator(50, 50, 50, 50, 0.5);

console.log(owl.health);
console.log(owl.damage(predator.damages));
console.log(owl.health);