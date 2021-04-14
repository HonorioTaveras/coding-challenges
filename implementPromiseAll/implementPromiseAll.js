// 1. Accepts an array of promises or promise-like values
// 2. It resolves to an array of the resolved values of its promises IF all promises resolve
// 3. It rejects with the first error that it receives from a sub-promise IF any promise fails

const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);
const prom3 = Promise.resolve(3);

function doThing(promUser) {
  // thing with user
}

describe('doThing', () => {
  it('thing', () => {
    const fakeUser = Promise.resolve({ name: 'Bob' });
    doThing(fakeUser);
  });
});

const promiseAll = async (promises) => {
  let promisesContainer = [];

  for (let i = 0; i < promises.length; i += 1) {
    let promise = await promises[i];
    promisesContainer.push(promise);
  }
  return promisesContainer;
};

// const promiseAll = (promises) => {
//   return new Promise((resolve, reject) => {
//     let promisesContainer = [];

//     let resolvedCount = 0;
//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then((value) => {
//           promisesContainer[i] = value;
//           resolvedCount++;
//           if (resolvedCount === promises.length) {
//             resolve(promisesContainer);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

const myFunc = async () => {
  try {
    const value = await promiseAll([prom1, prom2, prom3]);
    console.log(value);
  } catch (err) {
    console.log('Error!!!! ', err);
  }
};

myFunc(); // [ 1, 2, 3 ]
