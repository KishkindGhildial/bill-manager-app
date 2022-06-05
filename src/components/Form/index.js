import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../Container';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Button from '../Button';

import { toggleDateFormat } from '../../utils';

import { addBill, editBill } from '../../actions/billDataActions';

const Form = ({ setBillList, modalState, selectedMonth, handleHideModal }) => {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state);
  const getFormData = () => {
    const { type, id } = modalState;
    if (type === 'edit' && id) {
      const month = id.split('_')[0];
      const editFormData = storeData.billData[month].filter(
        bill => bill.id === id
      )[0];
      return editFormData;
    } else {
      return {
        description: '',
        category: '',
        date: '',
        amount: 0,
      };
    }
  };

  const [formData, setFormData] = useState(getFormData());
  const [formErrors, setFormErrors] = useState({
    description: '',
    category: '',
    date: '',
    amount: '',
  });

  const categoryValues = [
    'FoodNDining',
    'utility',
    'shopping',
    'education',
    'Personal Care',
    'Travel',
  ];

  const handleDescChange = e => {
    setFormData(prevState => ({
      ...prevState,
      ...{ description: e.target.value },
    }));
  };

  const handleCatChange = e => {
    setFormData(prevState => ({
      ...prevState,
      ...{ category: e.target.value },
    }));
  };

  const handleDateChange = e => {
    setFormData(prevState => ({
      ...prevState,
      ...{ date: e.target.value },
    }));
  };

  const handleAmountChange = e => {
    setFormData(prevState => ({
      ...prevState,
      ...{ amount: e.target.value },
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // create funtion
    const errorMsgs = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        errorMsgs[key] = 'This field is required';
        // switch(key){
        //     case 'description' :
        //     case 'category' :
        //     case 'date' :
        //     case 'amount' :
        // }
      }
    });
    setFormErrors(errorMsgs);
    const { type, id } = modalState;
    if (type === 'add') {
      dispatch(addBill(formData));
    } else if (type === 'edit') {
      const month = id.split('_')[0];
      dispatch(editBill({ editData: formData, preEditMonth: month }));
    }
    handleHideModal();
  };

  return (
    <Container className="form">
      <form method="post" action="#">
        <Input
          name="description"
          type="text"
          value={formData.description}
          onChange={handleDescChange}
          label="Description"
          errorMsg={formErrors.description}
        />
        <Dropdown
          id="cat"
          name="cat"
          value={formData.category}
          onChange={handleCatChange}
          placeholder="Category"
          options={categoryValues}
          label="Category"
          errorMsg={formErrors.category}
        />
        <Input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleDateChange}
          label="Date"
          errorMsg={formErrors.date}
          modalType={modalState.type}
          selectedMonth={selectedMonth}
        />
        <Input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleAmountChange}
          label="Amount"
          errorMsg={formErrors.amount}
        />
        <Button className="form" handleClick={e => handleFormSubmit(e)}>
          Form
        </Button>
      </form>
    </Container>
  );
};

export default Form;
