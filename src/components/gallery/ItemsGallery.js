/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import styles from './itemsGalleryStyle.module.scss';
import Item from '../item/Item';

const ItemsGallery = () => {
  const allItems = useSelector((state) => state.coins.entities);

  const createItems = (list) => list.map((item) => (
    <li key={item.key}>
      <Item data={item} />
    </li>
  ));

  return (
    <div>
      {allItems
      && (
        <ul
          className={styles.mainContainer}
        >
          { createItems(allItems) }
        </ul>
      )}
    </div>
  );
};
export default ItemsGallery;
