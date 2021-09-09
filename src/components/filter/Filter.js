/* eslint-disable react/prop-types */
import Item from '../item/Item';

const Filter = ({ list, filterValue }) => {
  const filterItems = () => list.slice(filterValue - 10, filterValue).map((item) => (
    <Item
      key={item.id}
      data={item}
    />
  ));
  return (
    <>
      { filterItems() }
    </>
  );
};

export default Filter;
