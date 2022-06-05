import {
  ADD_BILL,
  DELETE_BILL,
  EDIT_BILL,
} from '../constants/billDataConstants';
import billData from '../billData';

export const billDataReducer = (state = billData, action) => {
  switch (action.type) {
    case ADD_BILL: {
      const formData = action.payload;
      const month = Number(formData.date.split('-')[1]);
      const entryId = `${month}_${state[month].length + 1}`;
      const formatedData = {
        ...formData,
        ...{ id: entryId },
      };

      const result = {
        ...state,
        ...{ [month]: [...state[month], formatedData] },
      };
      return result;
    }

    case EDIT_BILL: {
      const { preEditMonth, editData } = action.payload;
      const month = Number(editData.date.split('-')[1]);
      let result;

      // Finding editIndex
      const findingIndex = month => {
        let editIndex;
        state[month].forEach((bill, index) => {
          if (bill.id === editData.id) {
            editIndex = index;
          }
        });
        return editIndex;
      };

      const editIndex = findingIndex(month);
      let monthData = [...state[month]];

      monthData.splice(editIndex, 1, editData);
      result = { ...state, ...{ [month]: monthData } };

      return result;
    }
    case DELETE_BILL: {
      const id = action.payload;
      const month = id.split('_')[0];
      let deleteIndex;
      state[month].forEach((bill, index) => {
        if (bill.id === id) {
          deleteIndex = index;
        }
      });

      const deletedData = [...state[month]];
      deletedData.splice(deleteIndex, 1);

      deletedData.forEach((bill, index) => {
        // bill.id = `${month}_${state[month].length}`;
        deletedData[index] = { ...bill, ...{ id: `${month}_${index + 1}` } };
      });

      const result = { ...state, ...{ [month]: deletedData } };
      return result;
    }
    default:
      return state;
  }
};
