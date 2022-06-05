import React from 'react';
import Container from '../Container';

const Dropdown = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  label,
}) => {
  return (
    <Container className="dropdownContainer">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={e => {
          onChange(e);
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((value, index) => (
          <option value={value} key={`id_${index}&val_${value}`}>
            {value}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Dropdown;
