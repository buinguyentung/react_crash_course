const redux = require('redux');

const counterReducer = (state = { counter: 10 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }
  return state;
}
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

console.log(store.getState());

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "NO CHANGE"});
