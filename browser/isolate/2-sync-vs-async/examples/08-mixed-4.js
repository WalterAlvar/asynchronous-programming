import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

const callback1 = () => {
  log('+ execute async  1000 ms. NUEVE');//9
};
log('+ schedule async 1000 ms. UNO');//  1
setTimeout(callback1, 1000, '+ execute async  1000 ms');

const callback2 = () => {
  log('+ execute async  0 ms. OCHO');//8
};
log('+ schedule async 0 ms. DOS');//2
setTimeout(callback2, 0, '+ execute async  0 ms');

const callback3 = () => {
  log('- end synchronous 500 ms. CUATRO');//4
};
log('- begin synchronous 500 ms. TRES');//3
synchronousTimeout(callback3, 500, '- end synchronous 500 ms');

const callback4 = () => {
  log('- end synchronous 0 ms. SEIS');//6
};
log('- begin synchronous 0 ms. CINCO');//5
synchronousTimeout(callback4, 0, '- end synchronous 0 ms');

log('= = = =  the call stack is empty  = = = = SIETE');//7
