import React from 'react';
import './TableData.css';
import Container from '../Container';
import Heading from '../Heading';

const TableData = ({ billData, keyID }) => {
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
    </Container>
  );
};

export default TableData;
