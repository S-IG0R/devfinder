import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
