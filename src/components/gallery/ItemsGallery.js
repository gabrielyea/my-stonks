/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

const ItemsGallery = () => {
  const allItems = useSelector((state) => state.coins.entities);

  const createItems = (list) => list.map((item) => (
    <li key={item.key}>
      <p>{item.name}</p>
    </li>
  ));

  return (
    <div>
      {allItems
      && (
        <>
          { createItems(allItems) }
        </>
      )}
    </div>
  );
};
export default ItemsGallery;
