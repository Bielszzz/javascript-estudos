function sum(a, b = 10) {
  return a + b;
}

// const sumArrow = (a, b = 10) => {
//   console.log(a, b);
//   return a + b;
// };

// igual ao de cima

const sumArrow = (a, b = 10) => a + b; // apenas um linha quando tem apenas um return

const sumValue = sumArrow(1);

console.log(sumValue);
