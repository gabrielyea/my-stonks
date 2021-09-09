import { useCallback, useState } from 'react';

const useToggle = (first, second) => {
  const values = [first, second];
  const [value, setValue] = useState(0);
  const setToggle = useCallback(() => {
    let temp = value;
    temp += 1;
    temp %= values.length;
    setValue(temp);
  }, []);
  return [values[value], setToggle];
};

export default useToggle;
