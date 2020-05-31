class Pet {
  constructor(animal,age,breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity() {
    const today = new Date();
    const hour = today.getHours();

    if (hour > 8 && hour <= 20 ) {
      return 'playing';
    }
    else {
      return 'sleeping';
    }


  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    this._owner = owner;
    console.log(`Setter Called: ${_owner}`);
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

console.log(hamilton.activity);

hamilton._owner = "Mike";
console.log(hamilton._owner);

/*Notes: Getter and Setter methods are used to add "DYNAMIC" pieces of info to a class, or data that changes based on a certain
 criteria




 */
