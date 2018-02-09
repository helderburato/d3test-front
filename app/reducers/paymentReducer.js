import { PAYMENT_VALID, PAYMENT_INVALID } from '../actions/actionTypes';

export default function paymentReducer(valid = {}, action) {
  switch (action.type) {
    case PAYMENT_VALID: 
      return {
        valid: true
      };
    break;
    case PAYMENT_INVALID: 
      return {
        valid: false,
        errors: action.payload
      };
    break
    default: 
      return {
        valid: undefined,
        errors: {}
      };
    break;
  }
}