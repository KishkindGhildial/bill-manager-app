import React from 'react';
import './TableData.css';
import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';

const TableData = ({ billData, keyID, handleEditClick, handleDeleteClick }) => {
  return (
    <Container className="card" key={keyID}>
      {Object.keys(billData).map((billKey, index) =>
        billKey !== 'id' ? (
          <Container
            className={billKey}
            key={`id_${index}&billKey_${billData['id']}`}
          >
            <Heading type={'h3'} className={billData[billKey]}>
              {billData[billKey]}
            </Heading>
          </Container>
        ) : null
      )}
      <Button
        className="editButton"
        handleClick={() => handleEditClick(billData.id)}
      >
        Edit
      </Button>
      <Button
        className="deleteButton"
        handleClick={() => handleDeleteClick(billData.id)}
      >
        Delete
      </Button>
    </Container>
  );
};

export default TableData;
