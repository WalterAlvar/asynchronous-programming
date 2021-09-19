import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

// fill in the blanks

let x = '';

x += 'java';

const callback1 = () => {
  x += 'ri';
  log('cb 1:', x);
};
setTimeout(callback1, 20);

// += _;

const callback2 = () => {
  const test = x === 'javascript';
  log('cb 2:', test);
  console.assert(test, 'x should be "javascript"');
};
setTimeout(callback2, 40);

const callback3 = () => {
  x += 'sc';
  log('cb 3:', x);
};
setTimeout(callback3, 10);

const callback4 = () => {
  x += 'pt';
  log('cb 4:', x);
};
setTimeout(callback4, 30);

//x += _;

log(x);

log('= = = =  the call stack is empty  = = = =');
