class Person {
  constructor(firstName, LastName, age) {
    ((this.firstName = firstName),
      (this.LastName = LastName),
      (this.age = age));
  }

  // metodo normal - precisa ser instanciado
  getFullName() {
    console.log(`${this.firstName} ${this.LastName}`);
  }

  // static - posso usar sem instanciar nada
  static speak() {
    console.log("Hello World!");
  }
}

const person = new Person("Gabriel", "Oliveira", 22);

console.log(person);

person.getFullName();

Person.speak();
