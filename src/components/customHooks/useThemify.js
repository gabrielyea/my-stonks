import { useCallback, useState } from 'react';

const useThemify = (name, collection) => {
  const themes = collection;
  const [theme, setTheme] = useState(name);

  const applyTheme = useCallback((themeName) => {
    setTheme(themeName);
    Object.keys(themes[themeName]).forEach((att) => {
      document.documentElement.style.setProperty(`--${att}`, themes[themeName][att]);
    });
  }, []);
  return [theme, applyTheme];
};

export default useThemify;
