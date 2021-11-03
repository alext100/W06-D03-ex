const chalk = require("chalk");

const numeros = process.argv.slice(2);

const number1 = +process.argv.slice(2)[0];
const number2 = +process.argv.slice(2)[1];

if (typeof number1 === "number" && typeof number2 === "number") {
  process.exit(1);
}

const summa = (number1, number2) => number1 + number2;
const rest = (number1, number2) => number1 - number2;
const multiplication = (number1, number2) => number1 * number2;
const division = (number1, number2) => number1 / number2;

console.log("Resultados: ");
console.log(`${number1} + ${number2} = ${chalk.red(summa(number1, number2))}`);
console.log(`${number1} - ${number2} = ${chalk.green(rest(number1, number2))}`);
console.log(
  `${number1} * ${number2} = ${chalk.blue(multiplication(number1, number2))}`
);
console.log(
  `${number1} / ${number2} = ${chalk.magenta(division(number1, number2))}`
);

process.exit;
console.log("process.exit: ", process.exit);
