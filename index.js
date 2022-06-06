// Animals class
class Animals {
  constructor(name, breed, age, favFood) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.favFood = [];
  }
  introduce() {
    return `Hello, my name is ${this.name}`;
  }
  addFood() {
    this.favFood.push(food);
  }
  loopThroughFoods() {
    console.log(this);
    this.favFood.forEach(this.logFood);
  }
  logFood = (food) => {
    console.log(this);
    console.log(`Hello, my name is ${this.name}, and I love to eat ${food}`);
  }
}

class Bird extends Animals {
  constructor(...args) {
    super(...args);
    this.canFly = true;
  }
}

class Dog extends Animals {
  speak() {
    return "woof!";
  }
}

class Cat extends Animals {
  speak() {
    return "meow!";
  }
}

let jacques = new Cat("Jacques", "domestic shorthair", "8", ["canned food"]);

let cheyenne = new Dog("Cheyenne", "golden retriever", "50", ["treats"]);

let falco = new Bird("Falco", "parrot", "10", ["bird seed"]);

console.log(`jacques.speak(): ${jacques.speak()}`);
console.log(`cheyenne.speak(): ${cheyenne.speak()}`);
console.log(`falco.canFly: ${falco.canFly}`);
