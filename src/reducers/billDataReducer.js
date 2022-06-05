import { ADD_BILL } from '../constants/billDataConstants';
import billData from '../billData';

export const billDataReducer = (state = billData, action) => {
  switch (action.type) {
    case ADD_BILL: {
      //extract month from action.payload
      //add action.payload to state[month]
      //make sure all the process is immutable
      return state;
    }
    default:
      return state;
  }
};
