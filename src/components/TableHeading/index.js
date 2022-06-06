import React from 'react';
import './TableHeading.css';
import Container from '../Container';
import Heading from '../Heading';

const TableHeading = ({ className }) => {
  const title = ['Description', 'Category', 'Date', 'Amount'];
  return (
    <Container className={className}>
      {title.map((title, index) => (
        <Container className="billHeading" key={`${title}_${index}`}>
          <Heading type={'h3'} className={title}>
            {title}
          </Heading>
        </Container>
      ))}
    </Container>
  );
};

export default TableHeading;
