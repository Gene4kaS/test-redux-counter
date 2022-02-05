import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(10, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
