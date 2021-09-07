/* eslint-disable react/prop-types */
import React from 'react';
import styles from './detailStyle.module.scss';

const truncate = (str) => (str !== null ? str.substring(0, 15) : 'None');

const DataSet = ({ data }) => (
  <li className={styles.dataSet}>
    <h4>{data[0]}</h4>
    <p>{truncate(data[1])}</p>
  </li>
);

const Detail = ({ data }) => {
  const createList = () => Object.entries(data).map(
    (point) => <DataSet key={point} data={point} />,
  );

  return (
    <div className={styles.mainContainer}>
      <header>
        <h2>{data.symbol}</h2>
        <div className={styles.textContent}>
          <h3>{data.name}</h3>
          <p>
            {' '}
            Rank
            {data.rank}
          </p>
        </div>
      </header>
      <div className={styles.sectionTitle}>
        <p>
          {data.name}
          {' '}
          stats
        </p>
      </div>
      <ul>
        {createList().slice(2, 11)}
      </ul>
    </div>
  );
};

export default Detail;
