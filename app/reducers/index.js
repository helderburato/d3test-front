import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
  payment: paymentReducer
});

export default rootReducer;
