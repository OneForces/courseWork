import React from 'react';
import styles from './Dashboard.module.scss';
import { Menu } from "../../components/Menu";
import { MENU_PAGES } from '../../config/menu.config';

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Menu pages={MENU_PAGES} />
    </div>
  );
}
