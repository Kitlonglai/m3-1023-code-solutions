import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const argu = process.argv.slice(2);
const num1 = Number(argu[0]);
const operation = argu[1];
const num2 = Number(argu[2]);

let result;
if (operation === 'plus') {
  result = add(num1, num2);
} else if (operation === 'minus') {
  result = subtract(num1, num2);
} else if (operation === 'times') {
  result = multiply(num1, num2);
} else if (operation === 'over') {
  result = divide(num1, num2);
} else {
  console.log('invalid operation');
}

console.log(result);
