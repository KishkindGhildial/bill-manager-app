import {
  ADD_BILL,
  EDIT_BILL,
  DELETE_BILL,
} from '../constants/billDataConstants';

export const addBill = payload => {
  return {
    type: ADD_BILL,
    payload: payload,
  };
};

export const editBill = payload => {
  return {
    type: EDIT_BILL,
    payload: payload,
  };
};

export const deleteBill = payload => {
  return {
    type: DELETE_BILL,
    payload: payload,
  };
};
