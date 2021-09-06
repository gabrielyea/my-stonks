/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiRightArrowCircle } from 'react-icons/bi';
import styles from './itemStyle.module.scss';

const Item = (props) => {
  const { data } = props;

  const truncate = (str) => str.substring(0, 5);

  return (
    <div
      className={styles.mainContainer}
    >
      <BiRightArrowCircle className={styles.icon} />
      <h2>{data.symbol}</h2>
      <div className={styles.dataContainer}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.price}>{truncate(data.priceUsd)}</p>
      </div>
    </div>
  );
};

export default Item;
