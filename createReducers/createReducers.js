// const createReducers = (reducers) => (state, action) => {
//   let result = {};

//   for (const key in reducers) {
//      result[key] = reducers[key](state[key], action);
//   }

//   return result;
// }

const createReducers = (reducers) => {
  const reducer = (state, action, i = 0, result = {}) => {
    const key = Object.keys(reducers)[i];
    if (i === Object.keys(reducers).length) {
      return result;
    }
    return reducer(state, action, i + 1, { ...result, [key]: reducers[key](state[key], action)});
  };
  return reducer
};

const fooReducer = (state, action) => {
  return action
};

const barReducer = (state, action) => {
  return action
};

const reducer = createReducers({
  foo: fooReducer,
  bar: barReducer
});

console.log(reducer({}, { hello: "hello" }));

// { foo: { hello: "hello" }, bar: { hello: "hello" } }
