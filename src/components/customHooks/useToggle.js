import { useCallback, useState } from 'react';

const useToggle = (first, second) => {
  const values = [first, second];
  const [value, setValue] = useState(0);
  const setToggle = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  return [values[value % values.length], setToggle];
};

export default useToggle;
