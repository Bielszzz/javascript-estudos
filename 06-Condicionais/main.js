const sum = 1 + 2;

if (sum === 2) {
  console.log("A soma é igual a 2");
} else if (sum > 2) {
  console.log("A soma é maior que 2");
} else {
  console.log("A soma é diferente de 2");
}

if (sum > 2 && sum < 5) {
  console.log("A soma é maior que 2 e menor que 5");
}

if (sum > 2 || sum < 5) {
  console.log("A soma é maior que 2 ou menor que 5");
}

let number = sum === 2 ? 2 : 4;

console.log(number);

// switch case

const car = "Tesla";

switch (car) {
  case "Mercedes":
    console.log("Mercedes é legal");
    break;

  case "Ferrari":
    console.log("Ferrari é bem rapida");
    break;

  case "Tesla":
    console.log("Tesla é eletrico!");
    break;
}

// Truthy e Falsy

const x = ""; // FALSE

const y = 0; // FALSE

const a = null; // FALSE

const b = undefined; // FALSE

const list = []; // TRUE

const object = {}; // TRUE

console.log(!!object);
