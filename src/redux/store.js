import { createStore } from 'redux';

const initialState = { counterValue: 0 };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counterValue + payload,
        },
      };

    case 'counter/Decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counterValue - payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
