class Pet {
  constructor(animal,age,breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  speak() {
    console.log(this.sound);
  }

}

const hamilton = new Pet( 'dog', 2, 'maltese','woof');
const ernie = new Pet('dog', 1, 'pug','woof');
const rocket = new Pet('dog', 3, 'labador','woof');
const buttercup = new Pet('cat', 12, 'tabby','meow');
const mrsFloof = new Pet('cat', 7, 'maincoon','meow');
const marvel = new Pet('cat', 3, 'tabby','meow');

console.log(hamilton);
console.log(ernie);
console.log(rocket);
console.log(buttercup);
console.log(mrsFloof);
console.log(marvel);

hamilton.speak();
