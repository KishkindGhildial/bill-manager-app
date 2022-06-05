import { ADD_BILL } from '../constants/billDataConstants';

export const addBill = payload => {
  return {
    type: ADD_BILL,
    payload: payload,
  };
};
