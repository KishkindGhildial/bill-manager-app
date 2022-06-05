import React from 'react';
import './TableHeading.css';
import Container from '../Container';
import Heading from '../Heading';

const TableHeading = () => {
  const title = ['Description', 'Category', 'Date', 'Amount'];
  return (
    <Container className="heading">
      {title.map(title => (
        <Container className="billHeading">
          <Heading type={'h3'} className={title}>
            {title}
          </Heading>
        </Container>
      ))}
    </Container>
  );
};

export default TableHeading;
