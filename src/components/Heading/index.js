import React from 'react';
import './Heading.css';

const Heading = ({ children, type, className }) => {
  let elem;
  switch (type) {
    case 'h1':
      elem = <h1 className={className}>{children}</h1>;
      break;
    case 'h2':
      elem = <h2 className={className}>{children}</h2>;
      break;
    case 'h3':
      elem = <h3 className={className}>{children}</h3>;
      break;
    default:
      elem = <h3 className={className}>{children}</h3>;
  }

  return elem;
};
export default Heading;
