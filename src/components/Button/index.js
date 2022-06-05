import React from 'react';
import Container from '../Container';
import Text from '../Text';

const Button = ({ children, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
