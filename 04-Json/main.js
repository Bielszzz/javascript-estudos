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

const todoJSON = JSON.stringify(todo);

const todoList = JSON.parse(todoJSON);

console.log(todoJSON);

console.log(todoList);
