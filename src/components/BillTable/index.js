import React from 'react';
import TableData from '../TableData';

const BillTable = ({ billList, handleEditClick, handleDeleteClick }) => {
  debugger;
  return (
    <>
      {billList.map(billData => (
        <TableData
          billData={billData}
          keyID={billData.id}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          key={billData.id}
        />
      ))}
    </>
  );
};

export default BillTable;
