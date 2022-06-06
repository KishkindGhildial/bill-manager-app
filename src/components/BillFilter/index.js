import React from 'react';
import './BillFilter.css';
import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';
import { getMonthlyTotal, getMinMonthBills } from '../../utils';
import Text from '../Text';
import Input from '../Input';
import { useState } from 'react';

const BillFilter = ({
  selectedMonth,
  selectedCategory,
  handleMonthChange,
  handleCategoryChange,
  handleShowModal,
  billsList,
}) => {
  const [budget, setBudget] = useState(0);
  const [showMinMonthBills, setShowMinMonthBills] = useState(false);

  const handleBudgetChange = e => {
    setBudget(e.target.value);
  };

  return (
    <Container className="option">
      <Container className="dropdown">
        <select
          id="monthFilter"
          name="monthFilter"
          value={selectedMonth}
          onChange={e => {
            handleMonthChange(e.target.value);
          }}
        >
          <option value="">Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          id="catFilter"
          name="catFilter"
          value={selectedCategory}
          onChange={e => {
            handleCategoryChange(e.target.value);
          }}
        >
          <option value="">Category</option>
          <option value="FoodNDining">Food & Dining</option>
          <option value="utility">Utility</option>
          <option value="shopping">Shopping</option>
          <option value="education">Education</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Travel">Travel</option>
        </select>
      </Container>

      <Text className="total">{getMonthlyTotal(billsList)}</Text>
      <Container className="minBills">
        <Input
          name="Budget"
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          label="Budget"
          errorMsg={''}
        />
        <Button
          className={!budget ? 'calcBudgetDisabled' : 'calcBudget'}
          handleClick={() => setShowMinMonthBills(prevState => !prevState)}
        >
          Calculate
        </Button>
        <Container className="noOfBills">
          {showMinMonthBills ? (
            // getMinMonthBills(billsList, budget).map(entry => (
            //     <Text className="total" key={entry.id}>
            //       ,{entry.amount}
            //     </Text>
            //   ))
            <Text>{getMinMonthBills(billsList, budget)}</Text>
          ) : null}
        </Container>
      </Container>
      <Container className="addNChart">
        <Button className="addBill" handleClick={() => handleShowModal('add')}>
          Add
        </Button>
        <Button
          className="addBill"
          handleClick={() => handleShowModal('chart')}
        >
          Chart
        </Button>
      </Container>
    </Container>
  );
};

export default BillFilter;
