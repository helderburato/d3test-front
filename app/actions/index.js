import { INCREMENT, DECREMENT } from './actionTypes';

export const decrement = () => ({
  type: DECREMENT
});

export const increment = () => ({
  type: INCREMENT
});

export const paymentValid = () => ({
  type: PAYMENT_VALID
});

export const paymentInvalid = () => ({
  type: PAYMENT_INVALID
});