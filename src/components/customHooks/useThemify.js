import { useCallback, useState } from 'react';
import themes from './themes';

const useThemify = () => {
  const [theme, setTheme] = useState();

  const applyTheme = useCallback((themeName) => {
    setTheme(themeName);
    Object.keys(themes[themeName]).forEach((att) => {
      document.documentElement.style.setProperty(`--${att}`, themes[themeName][att]);
    });
  }, []);
  return [theme, applyTheme];
};

export default useThemify;
