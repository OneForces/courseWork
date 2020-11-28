import React from 'react';
import styles from './Content.module.scss';
import { SIDEBAR_ITEMS } from "../../config/sidebar.config";
import { Catalog } from "../../components/Catalog";

export const Content = () => {
  return (
    <div className={styles.content}>
      <Catalog />
    </div>
  );
}
