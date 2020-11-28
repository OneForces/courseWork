import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Catalog.module.scss';
import { CATALOG_GOODS } from "../../config/goods.config";
import { CatalogItem } from "./CatalogItem";

export const Catalog = ({ tags }) => {
  const [sortOption, setSortOption] = useState('count');
  const updateSelectedOption = (option) => () => setSortOption(option);
  const sortOptionClass = (option) => cn(styles['sort-option'], {
    [styles['option-selected']]: sortOption === option,
  });

  const items = tags === undefined
    ? CATALOG_GOODS
    : CATALOG_GOODS.filter((item) => item.tags.some((t) => tags.includes(t)));

  console.log(items);

  const sortedItems = items.sort((a, b) => (sortOption === 'price-high'
    ? Math.sign(a.price - b.price)
    : Math.sign(b[sortOption] - a[sortOption])
  ));

  return (
    <div className={styles.catalog}>
      <div className={styles['sort-wrapper']}>
        <div className={styles['sort-title']}>
          Сортировать:
        </div>
        <div className={styles['sort-select']}>
          <div
            className={sortOptionClass('count')}
            onClick={updateSelectedOption('count')}
          >
            По наличию
          </div>
          <div
            className={sortOptionClass('price-high')}
            onClick={updateSelectedOption('price-high')}
          >
            По возрастанию цены
          </div>
          <div
            className={sortOptionClass('price')}
            onClick={updateSelectedOption('price')}
          >
            По убыванию цены
          </div>
          <div
            className={sortOptionClass('rating')}
            onClick={updateSelectedOption('rating')}
          >
            По рейтингу
          </div>
          <div
            className={sortOptionClass('discount')}
            onClick={updateSelectedOption('discount')}
          >
            По скидке
          </div>
        </div>
      </div>
      <ul className={styles['goods-list']}>
        {sortedItems.map((item, index) => (
          <CatalogItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
