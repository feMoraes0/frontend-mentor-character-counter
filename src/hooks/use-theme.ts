import { useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleDarkClass = (isDarkTheme: boolean) => {
    document.querySelector('body')?.classList.toggle('dark', isDarkTheme);
  };

  const setLocalStorageTheme = (theme: ThemeType) => {
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const isDarkTheme = theme === 'dark';
    const nextTheme = isDarkTheme ? 'light' : 'dark';
    toggleDarkClass(!isDarkTheme);
    setLocalStorageTheme(nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const isDarkTheme =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window?.matchMedia('(prefers-color-scheme: dark)')?.matches);
    const nextTheme = isDarkTheme ? 'dark' : 'light';
    toggleDarkClass(isDarkTheme);
    setLocalStorageTheme(nextTheme);
    setTheme(nextTheme);
  }, []);

  return [theme, toggleTheme] as const;
};

export default useTheme;
