export const toggleDateFormat = date => date.split('-').reverse().join('-');

export const getMonthlyTotal = billsList => {
  let total = 0;
  billsList.forEach(bill => {
    total += Number(bill.amount);
  });
  return total;
};

// export const getMinMonthBills = (billsList, budget) => {
//   const result = [];
//   const cloneBillsList = [...billsList];
//   const descBillsList = cloneBillsList.sort((a, b) => {
//     return b.amount - a.amount;
//   });
//   let difference = 1;
//   while (difference > 0) {
//     debugger;
//     if (difference === 1) {
//       difference = budget - Number(descBillsList[0].amount);
//     } else {
//       difference -= Number(descBillsList[0].amount);
//     }

//     if (difference > 0) {
//       result.push(descBillsList[0]);
//     } else {
//       if (result.length === 0) {
//         difference = 1;
//       }
//     }
//     descBillsList.shift();
//     if (descBillsList.length === 0) {
//       break;
//     }
//   }
//   return result;
// };

export const getMinMonthBills = (billsList, budget) => {
  let result = 0;
  const resultBills = [];
  const cloneBillsList = [...billsList];
  let cloneBudget = budget;
  const descBillsList = cloneBillsList.sort((a, b) => {
    return b.amount - a.amount;
  });

  while (
    descBillsList.length > 0 &&
    cloneBudget - Number(descBillsList[0].amount) < 0
  ) {
    descBillsList.shift();
  }

  let difference = 1;

  while (difference > 0 && descBillsList.length > 0) {
    if (difference === 1) {
      difference = cloneBudget - Number(descBillsList[0].amount);
    } else {
      difference -= Number(descBillsList[0].amount);
    }

    if (difference > 0) {
      result += 1;
      resultBills.push(Number(descBillsList[0].amount));
    } else {
      difference = difference + Number(descBillsList[0].amount);
    }
    descBillsList.shift();
  }
  const resultObj = { result: result, resultBills: resultBills };
  return resultObj;
};
