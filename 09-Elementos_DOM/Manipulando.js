const items = document.querySelector(".items");

const botao = document.querySelector(".btn");

// items.remove();

items.firstElementChild.remove();
// items.lastElementChild.remove();

items.children[0].textContent = "Item ummm";

items.lastElementChild.innerHTML = "<h1>Hello World</h1>";

botao.style.background = "blue";
