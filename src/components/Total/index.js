import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import { getMonthlyTotal } from '../../utils';

const Total = ({ billList }) => {
  return (
    <Container className="totalContainer">
      <Container className="totalAmountContainer">
        <Heading type={'h3'} className="totalAmountText">
          Total:
        </Heading>
        <Heading type={'h3'} className="totalAmount">
          {getMonthlyTotal(billList)}
        </Heading>
      </Container>
    </Container>
  );
};

export default Total;
