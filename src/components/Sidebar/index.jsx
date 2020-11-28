import React from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-head-catalog']}>
        Каталог
      </div>
      <ul className={styles.navigationMenu}>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
