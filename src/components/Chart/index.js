import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

const Chart = ({ billList, selectedMonth }) => {
  const labels = [];
  const graphData = [];
  const Month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const sortedList = billList.sort((a, b) => {
    const aDate = a.date.split('-')[2];
    const bDate = b.date.split('-')[2];

    return aDate - bDate;
  });

  sortedList.forEach(bill => {
    labels.push(bill.date.split('-')[2]);
    graphData.push(bill.amount);
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Time Series Chart for the Month of ${Month[selectedMonth - 1]}`,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Bill Amount',
        data: graphData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default Chart;
