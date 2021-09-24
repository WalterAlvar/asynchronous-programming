import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

const callback1 = () => {
  log('+ execute async  1000 ms. OCHO ');//8
};
log('+ schedule async 1000 ms. UNO');//1
setTimeout(callback1, 1000);

const callback2 = () => {
  log('- end synchronous 500 ms. TRES');//3
};
log('- begin synchronous 500 ms. DOS');//2
synchronousTimeout(callback2, 500);

const callback3 = () => {
  log('+ execute async  0 ms. SIETE');//7
};
log('+ schedule async 0 ms. CUATRO');//4
setTimeout(callback3, 0);

const callback4 = () => {
  log('- end synchronous 0 ms. SEIS');//6
};
log('- begin synchronous 0 ms. CINCO');//5
synchronousTimeout(callback4, 0);

log('= = = =  the call stack is empty  = = = =');
