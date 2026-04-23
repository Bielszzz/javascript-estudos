class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} falou e tem ${this.age} anos`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} latiu`);
  }
}

const animal = new Animal("Kira", 2);

const dog = new Dog("Bob", 3);

animal.speak();

dog.speak();
