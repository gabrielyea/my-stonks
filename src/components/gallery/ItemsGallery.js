/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import styles from './itemsGalleryStyle.module.scss';
import Item from '../item/Item';

const ItemsGallery = () => {
  const allItems = useSelector((state) => state.coins.entities);
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id);
  };

  const createItems = () => allItems.map((item) => (
    <Item
      key={item.id}
      data={item}
      // click={handleClick}
    />
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
