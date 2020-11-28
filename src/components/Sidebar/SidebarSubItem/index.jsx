import React from 'react';
import styles from './SidebarSubItem.module.scss';
import { Link } from "react-router-dom";

export const SideBarSubItem = ({ item, parentPath }) => {
  return (
    <React.Fragment>
      <li className={styles['sidebar-item']}>
        <Link className={styles.link} to={`${parentPath}${item.redirect}`}>
          {item.name}
        </Link>
      </li>
    </React.Fragment>
  );
}
