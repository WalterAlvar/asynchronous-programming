/**
 * This function returns a promise that resolves to a specific value.
 *
 * @param {any} [value=delay] - The value to resolve in the returned promise.
 * @returns {Promise<any>} A promise resolving to the value parameter.
 */
const returnAPromise = (valueTTTT = 'hello') => {
  const resolvingExecutor = (resolve) => {
    resolve(valueTTTT);//no matter how you call the value
  };
  return new Promise(resolvingExecutor);
};

returnAPromise('first promise')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

returnAPromise('second promise')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

returnAPromise('third promise')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

console.log('= =  the call stack is empty  = =');
