import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

export const Menu = ({ pages }) => {
  const [activePage, setActivePage] = useState('Каталог');
  const activePageClass = (pageName) => cn(styles.link, {
    [styles.active]: pageName === activePage,
  });

  return (
    <div className={styles['top-menu']}>
      <div className={styles['top-menu-content']}>
        <ul className={styles['top-menu-list']}>
          {pages.map(({ name, redirect }, index) => (
            <li key={index}>
              <NavLink className={activePageClass(name)} onClick={() => setActivePage(name)} to={redirect}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};