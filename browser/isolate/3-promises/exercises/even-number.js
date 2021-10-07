import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

/* Using Promises 2

  all together!

  Try with these input values:
    asdf
    -2
    -1
    0
    1
    2

*/

// declare callbacks
const logSuccessFailure = (resolvedValue) => {
  const finalMessage = resolvedValue ? 'number is even' : 'number is not even';
  log(finalMessage);
};
const mustBeGreaterThanZero = (resolvedValue) => {
  log('checking if ' + resolvedValue + ' is greater than 0');
  if (resolvedValue <= 0) {
    throw new RangeError(resolvedValue + ' is not greater than 0');
  }
  return resolvedValue;
};
const inputANumberExecutor = (resolve, reject) => {
  const userInput = prompt('enter an even number greater than 0');
  const userNumber = Number(userInput);
  const isANumber =
    userInput !== '' && userInput !== null && !Number.isNaN(userNumber);

  if (logSuccessFailure) {
    resolve(logSuccessFailure);
  } else {
    reject('input is not a number: ' + userInput);
  }
};
const handleRejection = (err) => {
  log('promise was rejected:', err);
};
const isEvenNumber = (resolvedValue) => {
  log('checking if ' + resolvedValue + ' is even');
  return resolvedValue % 2 === 0;
};

// use callbacks
new Promise()
  ._(-2) // is the number greater than zero?
  ._(0) // is the number even?
  ._(1) // log the success/failure of the user's input
  ._(2); // did an error or rejection occur?

log('= = = =  the call stack is empty  = = = =');
