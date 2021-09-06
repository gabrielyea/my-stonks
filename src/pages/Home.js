/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { BiBitcoin } from 'react-icons/bi';
import { fetchAllCoins } from '../redux/slices/coinsSlice';
import Loader from '../components/loader/Loader';
import ItemsGallery from '../components/gallery/ItemsGallery';
import { ReactComponent as Logo } from './doge.svg';
import styles from './homeStyle.module.scss';

const Home = () => {
  const loading = useSelector((state) => state.coins.loading);
  const list = useSelector((state) => state.coins.entities);
  const dispatch = useDispatch();

  const callDispatch = () => {
    dispatch(fetchAllCoins());
  };

  return (
    <div className={styles.mainContainer}>

      <header className={styles.header}>
        <Logo className={styles.icon} />
        <div>
          <h1>Cryptocurrencies</h1>
        </div>
      </header>
      <div className={styles.sectionTitle}>
        <p>All crypto currencies</p>
      </div>
      <Loader
        loading={loading}
        callDispatch={callDispatch}
        list={list}
      >
        <ItemsGallery />
      </Loader>
    </div>
  );
};
export default Home;
