import { createAction } from '@reduxjs/toolkit';

// const INCREMENT = 'counter/Increment';
// const DECREMENT = 'counter/Decrement';

export const increment = createAction('counter/Increment');
export const decrement = createAction('counter/Decrement');

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
