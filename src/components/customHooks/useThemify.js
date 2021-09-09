import { useCallback } from 'react';

const useThemify = (collection) => {
  const themes = collection;

  const applyTheme = useCallback((themeName) => {
    Object.keys(themes[themeName]).forEach((att) => {
      document.documentElement.style.setProperty(`--${att}`, themes[themeName][att]);
    });
  });
  return [applyTheme];
};

export default useThemify;
