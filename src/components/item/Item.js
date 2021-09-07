/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './itemStyle.module.scss';

const Item = (props) => {
  const { data, click } = props;

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
        <Link
          to={data.id}
          // onClick={() => click(data.id)}
        >
          <p>
            {data.name}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Item;
