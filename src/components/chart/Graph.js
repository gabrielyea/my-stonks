/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

const truncate = (str) => str.substring(8, 10);

const Graph = ({ list }) => {
  const [chart, setChart] = useState({});

  useState(() => {
    let newList = [...list];
    newList = newList.splice(list.length - 30, list.length);
    setChart({
      labels: newList.map((crypto) => truncate(crypto.date)),
      datasets: [
        {
          label: 'Price in USD',
          data: newList.map((crypto) => crypto.priceUsd),
          backgroundColor: [
            '#ffbb11',
          ],
        },
      ],
    }, []);
  });

  return (
    <Line
      data={chart}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Prices last 30 days',
          },
          legend: {
            display: true,
            position: 'bottom',
          },
          label: {
            type: 'date',
          },
        },
      }}
    />
  );
};

export default Graph;
