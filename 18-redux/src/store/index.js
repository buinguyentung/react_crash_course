import { createStore } from 'redux';

const initialState = { counter: 10, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1, showCounter: true };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1, showCounter: true };
  }
  if (action.type === 'TOGGLE') {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;