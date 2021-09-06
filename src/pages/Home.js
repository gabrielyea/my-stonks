import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCoins } from '../redux/slices/coinsSlice';
import Loader from '../components/loader/Loader';
import ItemsGallery from '../components/gallery/ItemsGallery';

const Home = () => {
  const loading = useSelector((state) => state.coins.loading);
  const list = useSelector((state) => state.coins.entities);
  const dispatch = useDispatch();

  const callDispatch = () => {
    dispatch(fetchAllCoins());
  };

  return (
    <Loader
      loading={loading}
      callDispatch={callDispatch}
      list={list}
    >
      <ItemsGallery />
    </Loader>
  );
};
export default Home;
