import styles from './ThemeSwitcher.module.scss';
import { useEffect, useLayoutEffect, useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import useLocalStorage from '../../hooks/useLocalStorage';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isDark, setIsDark] = useState(theme === 'light' ? false : true);

  // сменяем тему
  useLayoutEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    setTheme(theme);
    document.body.setAttribute('data-theme', theme);
  }, [isDark, setTheme]);

  // убираем мелькание темы при начальной загрузке
  useLayoutEffect(() => {
    document.body.classList.add('preload');
    const timeout = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  const themeIcon = isDark ? (
    <IoSunny className={styles.icon} />
  ) : (
    <IoMoon className={styles.icon} />
  );
  const themeText = isDark ? 'light' : 'dark';

  return (
    <button className={styles.switch} onClick={() => setIsDark(!isDark)}>
      <span className={styles.text}>{themeText}</span>
      {themeIcon}
    </button>
  );
};

export default ThemeSwitcher;
