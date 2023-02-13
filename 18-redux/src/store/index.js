// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 10, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //redux toolkit would fix this internally
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
  name: 'authenticate',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

// merge spices reducers into one reducer
const store = configureStore({
  // reducer: counterSlice.reducer
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return { counter: state.counter + 1, showCounter: true };
//   }
//   if (action.type === 'DECREMENT') {
//     return { counter: state.counter - 1, showCounter: true };
//   }
//   if (action.type === 'TOGGLE') {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
