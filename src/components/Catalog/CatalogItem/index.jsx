import React from 'react';
import cn from 'classnames';
import styles from './CatalogItem.module.scss';
import { ItemRating } from "../ItemRating";
import { Link } from "react-router-dom";

export const CatalogItem = ({ item }) => {
  const isItemOutOfStock = item.count === 0;
  const priceClass = (defaultClass) => cn(defaultClass, {
    [styles.discount]: item.discount > 0,
  });

  const articleStateClass = cn({
    [styles['article-state-good']]: !isItemOutOfStock,
    [styles['article-state-bad']]: isItemOutOfStock,
  });

  return (
    <React.Fragment>
      <li className={styles.item}>
        <Link to={`/item/${item.id}`} className={styles['active-info-wrapper']}>
          <div className={styles['active-info']}>
            <img src={item.img} alt={item.name} className={styles['active-info-pic']} />
            <div className={styles['article-goods']}>
              <div className={styles['article-info']}>
                <span>Артикул: </span>
                {item.id}
              </div>
              <div className={articleStateClass}>
                <span>{isItemOutOfStock ? "Нет в наличии" : "В наличии"}</span>
              </div>
            </div>
            <div className={styles['active-info-name']}>
              {item.name}
            </div>
            <div className={styles['active-info-price']}>
              <div className={priceClass(styles.price)}>
                {(item.price - item.discount).toLocaleString()}
              </div>
              <div className={priceClass(styles.rub)}>
                &#8381;
              </div>
            </div>
            <ItemRating item={item} />
          </div>
        </Link>
        <Link to={`/item/${item.id}`} className={styles['cart-button']}>
          <div className={styles['cart-button-text']}>
            Купить
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
};
