const person = {
  firstName: "Gabriel",
  lastName: "Oliveira",
  age: "22",
  hobbies: ["Jogar", "Treinar", "Cozinhar"],
  cat: {
    name: "Kira",
    age: "3",
  },
};

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

//mesma coisa que acima
const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,
  cat: { name: catName },
} = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

const cook = person.hobbies[2];

console.log(cook);

//person.cat = "Kira";

console.log(person);
console.log(person.cat.name);
console.log(catName);
console.log(person.cat);

// ============================================ //

const todo = [
  {
    id: 1,
    description: "Estudar Js",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

//mudando o valor
todo[2].description = "Cozinhar";

console.log(todo[2].description);

console.log(todo[2]);
