import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SidebarItem.module.scss';
import { Link } from "react-router-dom";
import { SideBarSubItem } from "../SidebarSubItem";

export const SidebarItem = ({ item }) => {
  const [isSubMenuOpen, setSubMenuState] = useState(false);
  const updateSubMenuState = () => setSubMenuState(!isSubMenuOpen);
  const hasSubMenu = item.sub !== undefined;

  const itemClass = cn(styles.item, {
    [styles['item-open']]: isSubMenuOpen,
  });

  const linkClass = cn(styles.link, {
    [styles.open]: isSubMenuOpen,
  });

  const arrowClass = cn(styles.arrow, {
    [styles['arrow-open']]: isSubMenuOpen,
    [styles['arrow-down']]: !isSubMenuOpen,
  });

  return (
    <React.Fragment>
      <li className={itemClass}>
        <div className={styles['item-wrapper']}>
          <Link to={item.redirect} className={linkClass}>{item.name}</Link>
          {hasSubMenu &&
            <div className={styles['arrow-parent']} onClick={updateSubMenuState}>
              <div className={arrowClass} />
            </div>
          }
        </div>
        {isSubMenuOpen &&
          <ul className={styles['submenu-list']}>
            {item.sub.map((subItem, index) =>
              <SideBarSubItem key={index} item={subItem} parentPath={item.redirect} />
            )}
          </ul>
        }
      </li>
    </React.Fragment>
  );
};
