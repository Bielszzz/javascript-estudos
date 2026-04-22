// while

let index = 0;

while (index < 10) {
  //console.log(index);
  console.log("index é menor que 10!");
  index++;
}

// for in

const person = {
  name: "Duda",
  age: 21,
};

for (property in person) {
  console.log(person[property]);
}
